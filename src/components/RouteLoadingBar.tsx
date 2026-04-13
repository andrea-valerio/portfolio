import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useLocation } from 'react-router-dom'

type RouteProgressContextValue = {
  completeNavigation: () => void
}

const RouteProgressContext = createContext<RouteProgressContextValue | null>(null)

/**
 * Renders nothing; call complete when the lazy route has committed (inside Suspense).
 */
export function RouteLoadComplete() {
  const ctx = useContext(RouteProgressContext)
  const location = useLocation()

  useLayoutEffect(() => {
    ctx?.completeNavigation()
  }, [ctx, location.pathname, location.key])

  return null
}

type RouteLoadingProviderProps = {
  children: ReactNode
}

export function RouteLoadingProvider({ children }: RouteLoadingProviderProps) {
  const location = useLocation()
  const [active, setActive] = useState(false)

  const completeNavigation = useCallback(() => {
    setActive(false)
  }, [])

  useLayoutEffect(() => {
    setActive(true)
  }, [location.pathname, location.key])

  const value = useMemo(
    () => ({ completeNavigation }),
    [completeNavigation]
  )

  return (
    <RouteProgressContext.Provider value={value}>
      <div
        className={`pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[3px] overflow-hidden bg-accent-shade1 transition-opacity duration-200 ease-out ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden
      >
        <div
          className={`route-loading-bar__fill h-full w-[45%] max-w-[min(28rem,55vw)] bg-accent shadow-[0_0_8px_rgba(0,128,128,0.35)] will-change-transform ${
            active ? 'route-loading-bar__fill--active' : ''
          }`}
        />
      </div>
      {children}
    </RouteProgressContext.Provider>
  )
}
