import './App.css'
import { lazy, Suspense, useEffect, useRef, useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LayoutWrapper from './components/LayoutWrapper'
import { ProjectPageSkeleton } from './components/ProjectPageSkeleton'
import { scheduleRoutePrefetch } from './navigation/routePrefetch'

const HomePage = lazy(() => import('./pages/HomePage'))
const GroovePage = lazy(() => import('./pages/GroovePage'))
const OvenConfPage = lazy(() => import('./pages/OvenConfPage'))
const CitInstPage = lazy(() => import('./pages/CitInstPage'))
const EcomuseoPage = lazy(() => import('./pages/EcomuseoPage'))
const SustSmokPage = lazy(() => import('./pages/SustSmokPage'))
const ReelsFypPage = lazy(() => import('./pages/ReelsFypPage'))
const MeetupPage = lazy(() => import('./pages/MeetupPage'))
const ThesisPage = lazy(() => import('./pages/ThesisPage'))

/** With a 60vh hero, landing scroll shows ~40vh of the band (top ~20vh above the fold). */
const PROJECT_HERO_INITIAL_SCROLL_RATIO = 0.2

const routeFallback = (
  <LayoutWrapper
    header={<ProjectPageSkeleton.Header />}
    content={<ProjectPageSkeleton.Body />}
    contentOverlaysHero
  />
)

function App() {
  const location = useLocation()
  const scrollPos = useRef<{ [path: string]: number }>({})
  const routePrefetchGen = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollPos.current[location.pathname] = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useLayoutEffect(() => {
    if (location.pathname === '/') {
      const y = scrollPos.current['/'] || 0
      window.scrollTo(0, y)
    } else {
      window.scrollTo(
        0,
        Math.round(window.innerHeight * PROJECT_HERO_INITIAL_SCROLL_RATIO)
      )
    }
  }, [location.pathname])

  useEffect(() => {
    const g = ++routePrefetchGen.current
    scheduleRoutePrefetch(location.pathname, routePrefetchGen, g)
  }, [location.pathname, location.key])

  return (
    <Suspense fallback={routeFallback}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/groove" element={<GroovePage />} />
        <Route path="/ovenconf" element={<OvenConfPage />} />
        <Route path="/citinst" element={<CitInstPage />} />
        <Route path="/ecomuseo" element={<EcomuseoPage />} />
        <Route path="/sustsmok" element={<SustSmokPage />} />
        <Route path="/reelsfyp" element={<ReelsFypPage />} />
        <Route path="/meetup" element={<MeetupPage />} />
        <Route path="/thesis" element={<ThesisPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
