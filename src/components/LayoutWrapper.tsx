import type { ReactNode } from 'react'
import { useLayoutEffect } from 'react'
import Footer from './Footer'

/** Fraction of `[data-hero-spacer]` height to pre-scroll so the overlay sheet covers that much of the hero. */
const HERO_INITIAL_COVER_RATIO = 0.4

function InitialHeroCoverScroll({ active }: { active: boolean }) {
  useLayoutEffect(() => {
    if (!active) return
    if (typeof window === 'undefined') return
    if (window.location.hash.length > 1) return

    const el = document.querySelector('[data-hero-spacer]')
    if (!(el instanceof HTMLElement) || el.offsetHeight === 0) return

    const y = Math.round(el.offsetHeight * HERO_INITIAL_COVER_RATIO)
    const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
    window.scrollTo(0, Math.min(y, maxY))
  }, [active])

  return null
}

type LayoutWrapperProps = {
  header: ReactNode
  content: ReactNode
  className?: string
  /** Project case studies: fixed hero image under a scrolling opaque body column */
  contentOverlaysHero?: boolean
}

const LayoutWrapper = ({
  header,
  content,
  className = '',
  contentOverlaysHero = false,
}: LayoutWrapperProps) => {
  const gapClass = contentOverlaysHero
    ? 'gap-0'
    : 'gap-[2rem] sm:gap-[3rem] md:gap-[4rem] lg:gap-[6rem]'

  const headerWrapperClass = contentOverlaysHero ? 'w-full relative z-10' : 'w-full'

  const innerColumnClass =
    'w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-10 lg:px-20'

  return (
    <div className={`w-full flex flex-col items-center ${gapClass} ${className}`}>
      {contentOverlaysHero ? <InitialHeroCoverScroll active /> : null}
      <div className={headerWrapperClass}>{header}</div>

      {contentOverlaysHero ? (
        <div
          className="w-full relative z-20 bg-white shadow-[0_-3px_10px_rgba(28,36,42,0.06)]"
          data-overlay-sheet
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-0 z-[2] min-h-[1.5rem] h-8 sm:h-10 md:h-14 lg:h-16 -translate-y-full bg-gradient-to-b from-white/0 to-white"
          />
          <div className={`${innerColumnClass} relative z-[1] pt-12`}>
            <>
              {content}
              <div className="col-span-12">
                <Footer />
              </div>
            </>
          </div>
        </div>
      ) : (
        <div className={innerColumnClass}>
          <>
            {content}
            <div className="col-span-12">
              <Footer />
            </div>
          </>
        </div>
      )}
    </div>
  )
}

export default LayoutWrapper
