import type { MutableRefObject } from 'react'

type RoutePath =
  | '/'
  | '/groove'
  | '/ovenconf'
  | '/citinst'
  | '/ecomuseo'
  | '/sustsmok'
  | '/reelsfyp'
  | '/meetup'
  | '/thesis'

const routeLoaders: Record<RoutePath, () => Promise<unknown>> = {
  '/': () => import('../pages/HomePage'),
  '/groove': () => import('../pages/GroovePage'),
  '/ovenconf': () => import('../pages/OvenConfPage'),
  '/citinst': () => import('../pages/CitInstPage'),
  '/ecomuseo': () => import('../pages/EcomuseoPage'),
  '/sustsmok': () => import('../pages/SustSmokPage'),
  '/reelsfyp': () => import('../pages/ReelsFypPage'),
  '/meetup': () => import('../pages/MeetupPage'),
  '/thesis': () => import('../pages/ThesisPage'),
}

function runWhenIdle(cb: () => void): void {
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(() => cb(), { timeout: 2500 })
  } else {
    setTimeout(cb, 0)
  }
}

/** Prefetch a project route chunk (e.g. on hover/focus of a project card). */
export function prefetchProjectRoute(slug: string): void {
  const path = `/${slug}` as RoutePath
  const loader = routeLoaders[path]
  if (loader) {
    void loader().catch(() => {})
  }
}

/**
 * After the current route paints: if not Home, prefetch only the Home chunk (fast return to index).
 * Does not prefetch every other route (avoids idle-downloading large image-heavy chunks).
 * Call with an incremented generation; stale runs bail when `genRef.current !== generation`.
 */
export function scheduleRoutePrefetch(
  pathname: string,
  genRef: MutableRefObject<number>,
  generation: number
): void {
  runWhenIdle(() => {
    if (genRef.current !== generation) return
    if (pathname !== '/') {
      void routeLoaders['/']().catch(() => {})
    }
  })
}
