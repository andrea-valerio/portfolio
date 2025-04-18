import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

const isDev = import.meta.env.DEV
const basename = isDev ? '/' : '/portfolio'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter  basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
)