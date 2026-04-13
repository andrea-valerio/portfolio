import {
  useRef,
  useState,
  useReducer,
  useEffect,
  useLayoutEffect,
  useCallback,
  type CSSProperties,
  type MouseEvent,
  type PointerEvent,
} from 'react'
import { createPortal } from 'react-dom'
import { animate, motion, useMotionValue, type PanInfo } from 'framer-motion'
import leftArrowOverlayDark from '../assets/icons/left-arrow-overlay-dark.svg'
import leftArrowOverlayDarkOff from '../assets/icons/left-arrow-overlay-dark-inactive.svg'
import rightArrowOverlayDark from '../assets/icons/right-arrow-overlay-dark.svg'
import rightArrowOverlayDarkOff from '../assets/icons/right-arrow-overlay-dark-inactive.svg'
import leftArrowOverlay from '../assets/icons/left-arrow-overlay.svg'
import leftArrowOverlayOff from '../assets/icons/left-arrow-overlay-inactive.svg'
import rightArrowOverlay from '../assets/icons/right-arrow-overlay.svg'
import rightArrowOverlayOff from '../assets/icons/right-arrow-overlay-inactive.svg'
import closeLightboxIcon from '../assets/icons/close-lightbox.svg'

/** Full-viewport lightbox scrim (#1C242A) */
const LIGHTBOX_SCRIM = 'rgba(28, 36, 42, 0.75)'

/**
 * Lightbox layout tokens.
 * Image stage uses fixed top/bottom and horizontal insets; pill is anchored to the viewport bottom.
 */
const LB = {
  /** Horizontal gutter (px) from viewport to image stage */
  edgeInsetX: 120,
  /** Top and bottom inset (px) for the lightbox image stage */
  imageStageInsetY: 128,
  /** Horizontal gap (px) between slides in the draggable lightbox strip */
  slideGap: 12,
  /** Distance (px) from viewport bottom edge to lightbox pill navigator */
  pillViewportBottom: 24,
  stepperDotGap: 8,
  stepperDot: {
    frame: 6,
    hit: 12,
  },
  /** Gap (px) between chevrons and dot stepper in pill and inline carousel controls */
  pillArrowDotGap: 24,
  pillChevron: {
    frame: 16,
    hit: 24,
  },
  close: {
    inset: 48,
    size: 32,
    icon: (32 * 32) / 48,
  },
  wheelMinDeltaX: 28,
  wheelNewGestureGapMs: 100,
} as const

/** Below Tailwind `md` (768px): tighter insets so the lightbox image stage matches phone viewports. */
const LB_COMPACT = {
  edgeInsetX: 8,
  imageStageInsetTop: 64,
  imageStageInsetBottom: 80,
} as const

const LIGHTBOX_COMPACT_MQ = '(max-width: 767px)'

function useLightboxCompactLayout() {
  const [compact, setCompact] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(LIGHTBOX_COMPACT_MQ)
    const sync = () => setCompact(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])
  return compact
}

/** In-page carousel: vertical gap (px) from image row to nav below — design: 20px */
const IC = {
  stepperGapToImages: 20,
} as const

/** Pixels: treat scroll position within this distance of an edge as “at” that edge (sub-pixel + snap). */
const INLINE_SCROLL_EDGE_EPS = 3

function closestSlideIndexToCenter(container: HTMLDivElement): number {
  const children = Array.from(container.children) as HTMLElement[]
  if (children.length === 0) return 0
  const mid = container.scrollLeft + container.clientWidth / 2
  let best = 0
  let bestDist = Infinity
  children.forEach((ch, i) => {
    const cMid = ch.offsetLeft + ch.offsetWidth / 2
    const d = Math.abs(cMid - mid)
    if (d < bestDist) {
      bestDist = d
      best = i
    }
  })
  return best
}

/**
 * Sync active slide + prev/next disabled state from the scroll container.
 * `atFirst` / `atLast` use scrollLeft vs maxScroll so narrow (portrait) strips still disable
 * arrows at the real scroll ends; `index` follows closest-to-center for correct prev/next targets.
 */
function readInlineCarouselScrollState(
  container: HTMLDivElement,
  slideCount: number
): { index: number; atFirst: boolean; atLast: boolean } {
  if (slideCount <= 1) {
    return { index: 0, atFirst: true, atLast: true }
  }

  const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth)
  const sl = container.scrollLeft
  const eps = INLINE_SCROLL_EDGE_EPS

  const atFirst = maxScroll <= eps || sl <= eps
  const atLast = maxScroll <= eps || sl >= maxScroll - eps
  const index = closestSlideIndexToCenter(container)

  return { index, atFirst, atLast }
}

function scrollContainerToSlideIndex(container: HTMLDivElement, index: number) {
  const child = container.children[index] as HTMLElement | undefined
  if (!child) return
  const target =
    child.offsetLeft + child.offsetWidth / 2 - container.clientWidth / 2
  const max = Math.max(0, container.scrollWidth - container.clientWidth)
  container.scrollTo({ left: Math.max(0, Math.min(target, max)), behavior: 'smooth' })
}

type LightboxNav = { index: number; dir: 1 | -1 }

type LightboxNavAction =
  | { type: 'open'; index: number }
  | { type: 'prev'; max: number }
  | { type: 'next'; max: number }
  | { type: 'select'; index: number }

function lightboxNavReducer(state: LightboxNav, action: LightboxNavAction): LightboxNav {
  switch (action.type) {
    case 'open':
      return { index: action.index, dir: 1 }
    case 'prev': {
      const { max } = action
      if (max <= 1) return state
      if (state.index <= 0) return { index: max - 1, dir: -1 }
      return { index: state.index - 1, dir: -1 }
    }
    case 'next': {
      const { max } = action
      if (max <= 1) return state
      if (state.index >= max - 1) return { index: 0, dir: 1 }
      return { index: state.index + 1, dir: 1 }
    }
    case 'select': {
      if (action.index === state.index) return state
      return { index: action.index, dir: action.index > state.index ? 1 : -1 }
    }
    default:
      return state
  }
}

const stopLightboxBubble = (e: MouseEvent | PointerEvent) => {
  e.stopPropagation()
}

type LightboxStepperProps = {
  count: number
  currentIndex: number
  onSelect: (index: number) => void
  /** `onDark`: light dots for the black lightbox pill. `onLight`: accent / grey for in-page (no pill). */
  tone?: 'onDark' | 'onLight'
}

function LightboxStepper({
  count,
  currentIndex,
  onSelect,
  tone = 'onDark',
}: LightboxStepperProps) {
  const { frame, hit } = LB.stepperDot
  const hitOutset = (hit - frame) / 2

  const dotClass =
    tone === 'onLight'
      ? (i: number) =>
          i === currentIndex
            ? 'bg-accent'
            : 'bg-grey-3 group-hover:bg-grey-2'
      : (i: number) =>
          i === currentIndex
            ? 'bg-white'
            : 'bg-white/35 group-hover:bg-white/55'

  return (
    <nav
      className="flex max-w-full flex-wrap items-center justify-center"
      style={{ gap: LB.stepperDotGap }}
      aria-label="Gallery progress"
    >
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="relative shrink-0"
          style={{ width: frame, height: frame }}
        >
          <button
            type="button"
            aria-label={`Go to image ${i + 1} of ${count}`}
            aria-current={i === currentIndex ? 'step' : undefined}
            onClick={(e) => {
              e.stopPropagation()
              onSelect(i)
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="group absolute flex items-center justify-center border-0 bg-transparent p-0"
            style={{
              top: -hitOutset,
              left: -hitOutset,
              right: -hitOutset,
              bottom: -hitOutset,
              minWidth: hit,
              minHeight: hit,
            }}
          >
            <span
              className={`shrink-0 rounded-full transition-colors ${dotClass(i)}`}
              style={{ width: frame, height: frame }}
            />
          </button>
        </span>
      ))}
    </nav>
  )
}

type LightboxPillNavProps = {
  count: number
  currentIndex: number
  onSelect: (index: number) => void
  atFirst: boolean
  atLast: boolean
  onPrev: () => void
  onNext: () => void
}

function LightboxPillNav({
  count,
  currentIndex,
  onSelect,
  atFirst,
  atLast,
  onPrev,
  onNext,
}: LightboxPillNavProps) {
  const { frame, hit } = LB.pillChevron
  const hitOutset = (hit - frame) / 2

  return (
    <div
      className="flex shrink-0 items-center rounded-full bg-black px-5 py-3"
      style={{ gap: LB.pillArrowDotGap }}
      role="presentation"
    >
      <span className="relative shrink-0" style={{ width: frame, height: frame }}>
        <button
          type="button"
          aria-label="Previous image"
          disabled={atFirst}
          onClick={(e) => {
            e.stopPropagation()
            if (!atFirst) onPrev()
          }}
          onPointerDown={stopLightboxBubble}
          className={`absolute flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 ${
            atFirst ? 'pointer-events-none cursor-default' : ''
          }`}
          style={{
            top: -hitOutset,
            left: -hitOutset,
            right: -hitOutset,
            bottom: -hitOutset,
            minWidth: hit,
            minHeight: hit,
          }}
        >
          <img
            src={atFirst ? leftArrowOverlayOff : leftArrowOverlay}
            alt=""
            className="pointer-events-none block shrink-0"
            width={frame}
            height={frame}
            draggable={false}
          />
        </button>
      </span>
      <LightboxStepper count={count} currentIndex={currentIndex} onSelect={onSelect} />
      <span className="relative shrink-0" style={{ width: frame, height: frame }}>
        <button
          type="button"
          aria-label="Next image"
          disabled={atLast}
          onClick={(e) => {
            e.stopPropagation()
            if (!atLast) onNext()
          }}
          onPointerDown={stopLightboxBubble}
          className={`absolute flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 ${
            atLast ? 'pointer-events-none cursor-default' : ''
          }`}
          style={{
            top: -hitOutset,
            left: -hitOutset,
            right: -hitOutset,
            bottom: -hitOutset,
            minWidth: hit,
            minHeight: hit,
          }}
        >
          <img
            src={atLast ? rightArrowOverlayOff : rightArrowOverlay}
            alt=""
            className="pointer-events-none block shrink-0"
            width={frame}
            height={frame}
            draggable={false}
          />
        </button>
      </span>
    </div>
  )
}

type InlineCarouselStepperProps = {
  atFirst: boolean
  atLast: boolean
  onPrev: () => void
  onNext: () => void
}

/** In-page carousel: grey-1 circular prev/next (overlay-style chevrons, black on light). */
function InlineCarouselStepper({ atFirst, atLast, onPrev, onNext }: InlineCarouselStepperProps) {
  const { frame: chFrame } = LB.pillChevron

  return (
    <div
      className="inline-flex shrink-0 items-center p-2"
      style={{ gap: LB.pillArrowDotGap }}
      role="presentation"
    >
      <button
        type="button"
        aria-label="Previous image"
        disabled={atFirst}
        onClick={() => {
          if (!atFirst) onPrev()
        }}
        className={`box-border flex shrink-0 items-center justify-center rounded-full border-0 bg-grey-1 p-2 ${
          atFirst ? 'cursor-default' : 'cursor-pointer'
        }`}
      >
        <img
          src={atFirst ? leftArrowOverlayDarkOff : leftArrowOverlayDark}
          alt=""
          className="pointer-events-none block shrink-0"
          width={chFrame}
          height={chFrame}
          draggable={false}
        />
      </button>
      <button
        type="button"
        aria-label="Next image"
        disabled={atLast}
        onClick={() => {
          if (!atLast) onNext()
        }}
        className={`box-border flex shrink-0 items-center justify-center rounded-full border-0 bg-grey-1 p-2 ${
          atLast ? 'cursor-default' : 'cursor-pointer'
        }`}
      >
        <img
          src={atLast ? rightArrowOverlayDarkOff : rightArrowOverlayDark}
          alt=""
          className="pointer-events-none block shrink-0"
          width={chFrame}
          height={chFrame}
          draggable={false}
        />
      </button>
    </div>
  )
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

const lightboxSpring = { type: 'spring' as const, stiffness: 380, damping: 36, mass: 0.85 }

type LightboxSlideProps = {
  src: string
  alt: string
  layout: 'portrait' | 'landscape'
  /** Portrait: optional `min(100%, Npx)` cap for phone mockups */
  maxWidthPx?: number
  /** Matches inline strip `round` (rem); default `1` = 16px at default root font size */
  roundRem?: number
}

function LightboxSlide({ src, alt, layout, maxWidthPx, roundRem = 1 }: LightboxSlideProps) {
  const radius = `${roundRem}rem`
  const portraitMax: CSSProperties =
    layout === 'portrait' && maxWidthPx != null
      ? { maxWidth: `min(100%, ${maxWidthPx}px)` }
      : {}

  return (
    <div className="flex h-full w-full min-h-0 min-w-0 items-center justify-center overflow-visible">
      <div
        className="flex h-full w-full min-h-0 max-h-full max-w-full items-center justify-center overflow-hidden shadow-light"
        style={{ borderRadius: radius, ...portraitMax }}
      >
        <img
          src={src}
          alt={alt}
          className="block h-auto w-auto max-h-full max-w-full object-contain"
          style={{ display: 'block', borderRadius: radius }}
          draggable={false}
        />
      </div>
    </div>
  )
}

type LightboxMotionGalleryProps = {
  images: string[]
  index: number
  onIndexChange: (i: number) => void
  lightboxLayout: 'portrait' | 'landscape'
  lightboxPortraitMaxWidth?: number
  /** When length matches `images`, used for slide `alt`; otherwise default gallery phrasing */
  imageAlts?: string[]
  /** Inline strip corner radius (rem), mirrored in lightbox */
  roundRem: number
}

function LightboxMotionGallery({
  images,
  index,
  onIndexChange,
  lightboxLayout,
  lightboxPortraitMaxWidth,
  imageAlts,
  roundRem,
}: LightboxMotionGalleryProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const [stageW, setStageW] = useState(0)
  const x = useMotionValue(0)
  const reducedMotion = usePrefersReducedMotion()
  const didInitialSync = useRef(false)

  useLayoutEffect(() => {
    const el = stageRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      setStageW(el.clientWidth)
    })
    ro.observe(el)
    setStageW(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  const slideStep = stageW > 0 ? stageW + LB.slideGap : 0

  useEffect(() => {
    if (stageW <= 0 || slideStep <= 0) return
    const target = -index * slideStep
    if (!didInitialSync.current) {
      x.set(target)
      didInitialSync.current = true
      return
    }
    if (reducedMotion) {
      x.set(target)
    } else {
      animate(x, target, lightboxSpring)
    }
  }, [index, stageW, slideStep, reducedMotion, x])

  const onDragEnd = useCallback(
    (_e: unknown, info: PanInfo) => {
      if (stageW <= 0 || slideStep <= 0) return
      const { offset, velocity } = info
      const threshold = 0.2 * slideStep
      const n = images.length
      let newIndex = index
      if (offset.x > threshold || velocity.x > 450) {
        newIndex = index > 0 ? index - 1 : n - 1
      } else if (offset.x < -threshold || velocity.x < -450) {
        newIndex = index < n - 1 ? index + 1 : 0
      }
      onIndexChange(newIndex)
      const target = -newIndex * slideStep
      if (reducedMotion) {
        x.set(target)
      } else if (newIndex === index) {
        animate(x, target, lightboxSpring)
      }
    },
    [images.length, index, onIndexChange, reducedMotion, slideStep, stageW, x]
  )

  const wheelSwipeLockedRef = useRef(false)
  const lastHorizontalWheelAtRef = useRef(0)

  useEffect(() => {
    const el = stageRef.current
    if (!el || images.length <= 1) return

    const onWheel = (e: WheelEvent) => {
      const absX = Math.abs(e.deltaX)
      const absY = Math.abs(e.deltaY)
      if (absX < absY || absX < LB.wheelMinDeltaX) return

      const now = performance.now()
      if (now - lastHorizontalWheelAtRef.current > LB.wheelNewGestureGapMs) {
        wheelSwipeLockedRef.current = false
      }
      lastHorizontalWheelAtRef.current = now

      if (wheelSwipeLockedRef.current) {
        e.preventDefault()
        return
      }

      const n = images.length
      let nextIdx: number | null = null
      if (e.deltaX > 0) nextIdx = index < n - 1 ? index + 1 : 0
      else if (e.deltaX < 0) nextIdx = index > 0 ? index - 1 : n - 1

      if (nextIdx === null) {
        e.preventDefault()
        return
      }

      wheelSwipeLockedRef.current = true
      e.preventDefault()
      onIndexChange(nextIdx)
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [images.length, index, onIndexChange])

  const trackWidth =
    images.length * stageW + Math.max(0, images.length - 1) * LB.slideGap

  return (
    <div
      ref={stageRef}
      className="pointer-events-auto relative h-full min-h-0 w-full min-w-0 overflow-hidden"
      onClick={stopLightboxBubble}
      onPointerDown={stopLightboxBubble}
      role="presentation"
    >
      {stageW > 0 && (
        <motion.div
          className="flex h-full touch-pan-y"
          style={{
            x,
            width: trackWidth,
            gap: LB.slideGap,
            touchAction: 'pan-y',
          }}
          drag="x"
          dragConstraints={stageRef}
          dragElastic={0.12}
          dragMomentum={false}
          onDragEnd={onDragEnd}
        >
          {images.map((src, i) => (
            <div
              key={`${i}-${src}`}
              className="box-border flex h-full shrink-0 items-center justify-center overflow-hidden p-0"
              style={{ width: stageW }}
            >
              <LightboxSlide
                src={src}
                alt={
                  imageAlts?.length === images.length && imageAlts[i]
                    ? imageAlts[i]
                    : `Gallery ${i + 1} of ${images.length}`
                }
                layout={lightboxLayout}
                maxWidthPx={lightboxPortraitMaxWidth}
                roundRem={roundRem}
              />
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

type CarouselProps = {
  images: string[] // array of image paths
  width: number // image widths
  /** Corner radius in rem for inline strip thumbnails (lightbox images are square). Default `1`. */
  round?: number
  /** Fullscreen lightbox on thumbnail click (backdrop click closes; image and nav arrows do not) */
  lightbox?: boolean
  /**
   * Lightbox image sizing: `portrait` (default) caps height first like phone mockups;
   * `landscape` favors width for wide images in the padded viewport.
   */
  lightboxLayout?: 'portrait' | 'landscape'
  /** Portrait lightbox only: max width in px (`min(100%, Npx)`); omit for full padded width */
  lightboxPortraitMaxWidth?: number
  /** When length matches `images`, used for inline and lightbox `alt` text */
  imageAlts?: string[]
  /** Extra classes for inline strip images (e.g. `project-image` for page-matched radius and shadow) */
  inlineImageClassName?: string
}

const Carousel = ({
  images,
  width,
  round = 1,
  lightbox = false,
  lightboxLayout = 'portrait',
  lightboxPortraitMaxWidth,
  imageAlts,
  inlineImageClassName,
}: CarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollRafRef = useRef<number | null>(null)
  const [inlineScroll, setInlineScroll] = useState({
    index: 0,
    atFirst: true,
    atLast: true,
  })

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxNav, dispatchLightboxNav] = useReducer(lightboxNavReducer, { index: 0, dir: 1 })
  const lightboxIndex = lightboxNav.index

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  const openLightbox = useCallback((index: number) => {
    dispatchLightboxNav({ type: 'open', index })
    setLightboxOpen(true)
  }, [])

  const syncInlineIndexFromScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const next = readInlineCarouselScrollState(el, images.length)
    setInlineScroll((prev) => {
      if (
        prev.index === next.index &&
        prev.atFirst === next.atFirst &&
        prev.atLast === next.atLast
      ) {
        return prev
      }
      return next
    })
  }, [images.length])

  const onInlineScroll = useCallback(() => {
    if (scrollRafRef.current != null) return
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = null
      syncInlineIndexFromScroll()
    })
  }, [syncInlineIndexFromScroll])

  const scrollToSlideIndex = useCallback((i: number) => {
    const el = scrollRef.current
    if (!el) return
    scrollContainerToSlideIndex(el, i)
  }, [])

  const { atFirst: inlineAtFirst, atLast: inlineAtLast } = inlineScroll

  const inlinePrev = useCallback(() => {
    if (inlineScroll.atFirst) return
    scrollToSlideIndex(inlineScroll.index - 1)
  }, [inlineScroll.atFirst, inlineScroll.index, scrollToSlideIndex])

  const inlineNext = useCallback(() => {
    if (inlineScroll.atLast) return
    scrollToSlideIndex(inlineScroll.index + 1)
  }, [inlineScroll.atLast, inlineScroll.index, scrollToSlideIndex])

  const lightboxPrev = useCallback(() => {
    dispatchLightboxNav({ type: 'prev', max: images.length })
  }, [images.length])

  const lightboxNext = useCallback(() => {
    dispatchLightboxNav({ type: 'next', max: images.length })
  }, [images.length])

  const lightboxCompact = useLightboxCompactLayout()
  const lightboxEdgeInsetX = lightboxCompact ? LB_COMPACT.edgeInsetX : LB.edgeInsetX
  const lightboxImageStageInsetTop = lightboxCompact
    ? LB_COMPACT.imageStageInsetTop
    : LB.imageStageInsetY
  const lightboxImageStageInsetBottom = lightboxCompact
    ? LB_COMPACT.imageStageInsetBottom
    : LB.imageStageInsetY
  const lightboxCloseInset = lightboxCompact
    ? LB.close.inset / 2
    : LB.close.inset

  const selectLightboxImage = useCallback((i: number) => {
    dispatchLightboxNav({ type: 'select', index: i })
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    syncInlineIndexFromScroll()
    container.addEventListener('scroll', onInlineScroll, { passive: true })
    window.addEventListener('resize', syncInlineIndexFromScroll)
    return () => {
      container.removeEventListener('scroll', onInlineScroll)
      window.removeEventListener('resize', syncInlineIndexFromScroll)
      if (scrollRafRef.current != null) {
        cancelAnimationFrame(scrollRafRef.current)
        scrollRafRef.current = null
      }
    }
  }, [images.length, width, onInlineScroll, syncInlineIndexFromScroll])

  useLayoutEffect(() => {
    syncInlineIndexFromScroll()
  }, [images.length, width, syncInlineIndexFromScroll])

  useEffect(() => {
    if (images.length <= 1) {
      setInlineScroll({ index: 0, atFirst: true, atLast: true })
    }
  }, [images.length])

  useEffect(() => {
    if (!lightboxOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [lightboxOpen])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
        return
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        lightboxPrev()
        return
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        lightboxNext()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, closeLightbox, lightboxPrev, lightboxNext])

  /** Lightbox loops: pill chevrons stay enabled at ends when multiple images */
  const lightboxPillAtFirst = images.length <= 1 && lightboxIndex <= 0
  const lightboxPillAtLast = images.length <= 1 && lightboxIndex >= images.length - 1

  const lightboxOverlay =
    lightbox &&
    lightboxOpen &&
    typeof document !== 'undefined' &&
    createPortal(
      <div
        className="fixed inset-0 z-[200] min-h-0 cursor-default"
        style={{ background: LIGHTBOX_SCRIM }}
        onClick={closeLightbox}
        role="presentation"
      >
        <button
          type="button"
          aria-label="Close gallery"
          className="absolute z-[210] flex cursor-pointer items-center justify-center border-0 bg-transparent p-0"
          style={{
            top: lightboxCloseInset,
            right: lightboxCloseInset,
            width: LB.close.size,
            height: LB.close.size,
            minWidth: LB.close.size,
            minHeight: LB.close.size,
          }}
          onClick={(e) => {
            e.stopPropagation()
            closeLightbox()
          }}
          onPointerDown={stopLightboxBubble}
        >
          <img
            src={closeLightboxIcon}
            alt=""
            width={LB.close.icon}
            height={LB.close.icon}
            className="pointer-events-none shrink-0"
            draggable={false}
          />
        </button>
        <div
          className="pointer-events-none absolute z-[201] flex min-h-0 min-w-0 overflow-hidden"
          style={{
            top: lightboxImageStageInsetTop,
            bottom: lightboxImageStageInsetBottom,
            left: lightboxEdgeInsetX,
            right: lightboxEdgeInsetX,
          }}
          role="presentation"
        >
          <div className="relative grid h-full min-h-0 w-full min-w-0 grid-cols-1 overflow-hidden [grid-template-rows:minmax(0,1fr)]">
            <div className="pointer-events-none col-start-1 row-start-1 flex h-full min-h-0 min-w-0 w-full items-stretch overflow-hidden">
              {images.length > 1 ? (
                <LightboxMotionGallery
                  images={images}
                  index={lightboxIndex}
                  onIndexChange={selectLightboxImage}
                  lightboxLayout={lightboxLayout}
                  lightboxPortraitMaxWidth={lightboxPortraitMaxWidth}
                  imageAlts={imageAlts}
                  roundRem={round}
                />
              ) : (
                <div
                  className="pointer-events-auto box-border flex h-full min-h-0 w-full min-w-0 items-center justify-center p-0"
                  onClick={stopLightboxBubble}
                  onPointerDown={stopLightboxBubble}
                  role="presentation"
                >
                  <LightboxSlide
                    src={images[0]}
                    alt={
                      imageAlts?.length === images.length && imageAlts[0]
                        ? imageAlts[0]
                        : 'Gallery image'
                    }
                    layout={lightboxLayout}
                    maxWidthPx={lightboxPortraitMaxWidth}
                    roundRem={round}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {images.length > 1 && (
          <div
            className="absolute left-0 right-0 z-[205] flex justify-center"
            style={{
              bottom: LB.pillViewportBottom,
            }}
            onClick={stopLightboxBubble}
            onPointerDown={stopLightboxBubble}
            role="presentation"
          >
            <LightboxPillNav
              count={images.length}
              currentIndex={lightboxIndex}
              onSelect={selectLightboxImage}
              atFirst={lightboxPillAtFirst}
              atLast={lightboxPillAtLast}
              onPrev={lightboxPrev}
              onNext={lightboxNext}
            />
          </div>
        )}
      </div>,
      document.body
    )

  return (
    <div className="relative w-full">
      {lightboxOverlay}

      <div className="flex flex-col" style={{ gap: IC.stepperGapToImages }}>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth gap-[3rem] px-2 pt-2 pb-0 hide-scrollbar snap-x snap-mandatory"
          onScroll={onInlineScroll}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className={`snap-center shrink-0 overflow-hidden shadow-light ${
                width > 0 ? '' : 'w-full min-w-full'
              } ${lightbox ? 'cursor-pointer' : ''}`}
              style={{
                width: width > 0 ? `${width}px` : undefined,
                borderRadius: `${round}rem`,
              }}
              onClick={lightbox ? () => openLightbox(idx) : undefined}
              onKeyDown={
                lightbox
                  ? (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        openLightbox(idx)
                      }
                    }
                  : undefined
              }
              role={lightbox ? 'button' : undefined}
              tabIndex={lightbox ? 0 : undefined}
            >
              <img
                src={src}
                alt={
                  imageAlts?.length === images.length && imageAlts[idx]
                    ? imageAlts[idx]
                    : `carousel-${idx}`
                }
                className={`${
                  inlineImageClassName ? `${inlineImageClassName} ` : ''
                }block h-auto w-full object-contain`}
                onLoad={syncInlineIndexFromScroll}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <div className="flex justify-center md:hidden">
              <LightboxStepper
                tone="onLight"
                count={images.length}
                currentIndex={inlineScroll.index}
                onSelect={scrollToSlideIndex}
              />
            </div>
            <div className="hidden justify-center md:flex">
              <InlineCarouselStepper
                atFirst={inlineAtFirst}
                atLast={inlineAtLast}
                onPrev={inlinePrev}
                onNext={inlineNext}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Carousel
