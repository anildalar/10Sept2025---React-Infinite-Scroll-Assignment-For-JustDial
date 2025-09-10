import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BusinessListing from './pages/BusinessListing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BusinessListing />
  </StrictMode>,
)
