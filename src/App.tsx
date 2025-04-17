import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef, useLayoutEffect } from 'react'
import HomePage from './pages/HomePage'
import GroovePage from './pages/GroovePage'
import OvenConfPage from './pages/OvenConfPage'
import CitInstPage from './pages/CitInstPage'
import EcomuseoPage from './pages/EcomuseoPage'
import SustSmokPage from './pages/SustSmokPage'
import ReelsFypPage from './pages/ReelsFypPage'

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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/groove" element={<GroovePage />} />
      <Route path="/ovenconf" element={<OvenConfPage />} />
      <Route path="/citinst" element={<CitInstPage />} />
      <Route path="/ecomuseo" element={<EcomuseoPage />} />
      <Route path="/sustsmok" element={<SustSmokPage />} />
      <Route path="/reelsfyp" element={<ReelsFypPage />} />
    </Routes>
  )
}

export default App