import { useEffect, useState } from 'react'

/**
 * Paint-gate hook (`useImagesPaintReady` + `projectPaintGateImages`) gated **Vite+React** case-study
 * routes behind `ProjectPageSkeleton` until enough images loaded. The Astro migration renders case
 * studies via islands (`client:load`) without that gate so content mounts immediately; to restore
 * the old behavior, wrap the page body with the skeleton until `useImagesPaintReady` returns true
 * (see `before_astro:src/pages/GroovePage.tsx`).
 */

/** Portion of images that must have loaded (or errored) before showing real UI. */
export const IMAGE_PAINT_THRESHOLD = 0.8

/** Case studies: only the first N ordered images block paint; the rest load with the page. */
export const PROJECT_PAINT_GATE_COUNT = 3

/** Softer than home — e.g. with n=3, ceil(3 * 0.55) = 2 images must complete. */
export const PROJECT_PAINT_THRESHOLD = 0.55

/** Stable slice used for `useImagesPaintReady` on project routes (assign to a module-level const). */
export function projectPaintGateImages<T extends readonly string[]>(
  ordered: T
): readonly string[] {
  if (ordered.length === 0) return ordered
  const n = Math.min(PROJECT_PAINT_GATE_COUNT, ordered.length)
  return ordered.slice(0, n)
}

export type ImageFetchPriorityLevel = 'high' | 'auto' | 'low'

/** `ceil(n * threshold)` images must complete; 0 when `n === 0`. */
export function requiredLoadedCountForPaint(
  total: number,
  threshold: number = IMAGE_PAINT_THRESHOLD
): number {
  if (total <= 0) return 0
  return Math.ceil(total * threshold)
}

/** Top third → high, middle → auto, bottom → low (vertical priority). */
export function fetchPriorityForVerticalIndex(
  index: number,
  total: number
): ImageFetchPriorityLevel {
  if (total <= 0) return 'auto'
  if (total === 1) return 'high'
  const t = index / total
  if (t < 1 / 3) return 'high'
  if (t < 2 / 3) return 'auto'
  return 'low'
}

/** One entry per image URL in top-to-bottom order. */
export function buildFetchPriorities(total: number): ImageFetchPriorityLevel[] {
  return Array.from({ length: total }, (_, i) => fetchPriorityForVerticalIndex(i, total))
}

function preloadImageWithPriority(
  src: string,
  priority: ImageFetchPriorityLevel
): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    if ('fetchPriority' in img) {
      try {
        ;(img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = priority
      } catch {
        /* ignore */
      }
    }
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
  })
}

/**
 * Becomes `true` when at least `ceil(images.length * threshold)` images have loaded or errored.
 * All preloads start in parallel; `fetchPriority` follows `images` order (top = higher).
 */
export function useImagesPaintReady(
  images: readonly string[],
  threshold: number = IMAGE_PAINT_THRESHOLD
): boolean {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(false)

    if (images.length === 0) {
      setReady(true)
      return
    }

    const required = requiredLoadedCountForPaint(images.length, threshold)
    let loaded = 0
    let cancelled = false

    const bump = () => {
      loaded++
      if (!cancelled && loaded >= required) {
        setReady(true)
      }
    }

    const priorities = buildFetchPriorities(images.length)

    images.forEach((src, i) => {
      void preloadImageWithPriority(src, priorities[i]).then(() => {
        if (!cancelled) bump()
      })
    })

    return () => {
      cancelled = true
    }
  }, [images, threshold])

  return ready
}
