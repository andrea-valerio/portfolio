import { useCallback, useLayoutEffect, useRef, useState } from 'react'

type Band = { top: number; height: number; visible: boolean }
type Layer = { top: number; height: number; visible: boolean }

const hiddenBand: Band = { top: 0, height: 0, visible: false }
const hiddenLayer: Layer = { top: 0, height: 0, visible: false }

/** ~60vh at a 900px-tall viewport; replaced immediately in useLayoutEffect by measured layout. */
const DEFAULT_HERO_LAYER_HEIGHT_PX = 540

type Layout = { band: Band; layer: Layer }

const sameLayout = (a: Layout, b: Layout) =>
  a.band.visible === b.band.visible &&
  a.band.top === b.band.top &&
  a.band.height === b.band.height &&
  a.layer.visible === b.layer.visible &&
  a.layer.top === b.layer.top &&
  a.layer.height === b.layer.height

/**
 * - **Band**: fixed flex overlay for the title — clipped to viewport and above `[data-overlay-sheet]`.
 * - **Layer**: fixed hero image pinned to the viewport top (`top: 0`); height follows the in-flow spacer.
 *   The white `[data-overlay-sheet]` body scrolls over it. The layer hides once the spacer no longer
 *   intersects the viewport so the image does not persist under the rest of the page.
 */
export function useHeroTitleOverlayBand(enabled: boolean) {
  const heroRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const [layout, setLayout] = useState<Layout>(() => {
    if (!enabled) return { band: hiddenBand, layer: hiddenLayer }
    return {
      band: hiddenBand,
      layer: {
        top: 0,
        height: DEFAULT_HERO_LAYER_HEIGHT_PX,
        visible: true,
      },
    }
  })

  const update = useCallback(() => {
    if (!enabled) return
    const hero = heroRef.current
    if (!hero) return

    const rect = hero.getBoundingClientRect()
    const sheet = document.querySelector('[data-overlay-sheet]')
    const T =
      sheet instanceof HTMLElement
        ? sheet.getBoundingClientRect().top
        : Number.POSITIVE_INFINITY

    const vh = window.innerHeight

    let band: Band
    const clipTop = Math.max(rect.top, 0)
    const clipBottom = Math.min(rect.bottom, T, vh)
    if (clipTop < clipBottom) {
      band = {
        top: Math.round(clipTop),
        height: Math.max(0, Math.round(clipBottom - clipTop)),
        visible: true,
      }
    } else {
      band = hiddenBand
    }

    const layerHeight = Math.max(0, Math.round(rect.height))
    const layer: Layer =
      rect.bottom > 0 && rect.top < vh && layerHeight > 0
        ? {
            top: 0,
            height: layerHeight,
            visible: true,
          }
        : hiddenLayer

    const next: Layout = { band, layer }
    setLayout((prev) => (sameLayout(prev, next) ? prev : next))
  }, [enabled])

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current != null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      update()
    })
  }, [update])

  useLayoutEffect(() => {
    if (!enabled) return

    update()
    const onScrollOrResize = () => scheduleUpdate()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    const el = heroRef.current
    const ro = el ? new ResizeObserver(() => scheduleUpdate()) : null
    if (el && ro) ro.observe(el)

    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      ro?.disconnect()
    }
  }, [enabled, update, scheduleUpdate])

  const { band, layer } = layout
  return {
    heroRef,
    bandTopPx: band.top,
    bandHeightPx: band.height,
    bandVisible: band.visible,
    layerHeightPx: layer.height,
    layerVisible: layer.visible,
  }
}
