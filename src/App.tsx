import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GroovePage from './pages/GroovePage'
import OvenConfPage from './pages/OvenConfPage'
import CitInstPage from './pages/CitInstPage'
import EcomuseoPage from './pages/EcomuseoPage'
import SustSmokPage from './pages/SustSmokPage'
import ReelsFypPage from './pages/ReelsFypPage'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/groove" element={<GroovePage />} />
        <Route path="/ovenconf" element={<OvenConfPage />} />
        <Route path="/citinst" element={<CitInstPage />} />
        <Route path="/ecomuseo" element={<EcomuseoPage />} />
        <Route path="/sustsmok" element={<SustSmokPage />} />
        <Route path="/reelsfyp" element={<ReelsFypPage />} />
      </Routes>
    </>
  )
}

export default App