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

const ALL_PATHS = Object.keys(routeLoaders) as RoutePath[]

function runWhenIdle(cb: () => void): void {
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(() => cb(), { timeout: 2500 })
  } else {
    setTimeout(cb, 0)
  }
}

/**
 * After the current route paints: if not Home, prefetch Home chunk, then prefetch all other route chunks.
 * Call with an incremented generation; stale runs bail when `genRef.current !== generation`.
 */
export function scheduleRoutePrefetch(
  pathname: string,
  genRef: MutableRefObject<number>,
  generation: number
): void {
  runWhenIdle(() => {
    if (genRef.current !== generation) return

    const prefetchOthers = (skipHome: boolean) => {
      if (genRef.current !== generation) return
      const targets = ALL_PATHS.filter((p) => {
        if (p === pathname) return false
        if (skipHome && p === '/') return false
        return true
      })
      void Promise.all(targets.map((p) => routeLoaders[p]())).catch(() => {})
    }

    if (pathname !== '/') {
      void routeLoaders['/']()
        .then(() => {
          if (genRef.current !== generation) return
          runWhenIdle(() => prefetchOthers(true))
        })
        .catch(() => {})
    } else {
      prefetchOthers(false)
    }
  })
}
