import './App.css'
import { lazy, Suspense, useEffect, useRef, useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LayoutWrapper from './components/LayoutWrapper'
import { ProjectPageSkeleton } from './components/ProjectPageSkeleton'
import { RouteLoadingProvider, RouteLoadComplete } from './components/RouteLoadingBar'

const HomePage = lazy(() => import('./pages/HomePage'))
const GroovePage = lazy(() => import('./pages/GroovePage'))
const OvenConfPage = lazy(() => import('./pages/OvenConfPage'))
const CitInstPage = lazy(() => import('./pages/CitInstPage'))
const EcomuseoPage = lazy(() => import('./pages/EcomuseoPage'))
const SustSmokPage = lazy(() => import('./pages/SustSmokPage'))
const ReelsFypPage = lazy(() => import('./pages/ReelsFypPage'))
const MeetupPage = lazy(() => import('./pages/MeetupPage'))
const ThesisPage = lazy(() => import('./pages/ThesisPage'))

const routeFallback = (
  <LayoutWrapper header={<ProjectPageSkeleton.Header />} content={<ProjectPageSkeleton.Body />} />
)

function App() {
  const location = useLocation()
  const scrollPos = useRef<{ [path: string]: number }>({})

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
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return (
    <RouteLoadingProvider>
      <Suspense fallback={routeFallback}>
        <>
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
          <RouteLoadComplete />
        </>
      </Suspense>
    </RouteLoadingProvider>
  )
}

export default App
