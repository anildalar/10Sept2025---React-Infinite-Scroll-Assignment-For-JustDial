import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BusinessListingPagination from './pages/BusinessListingPagination.jsx'
import AA from './components/AA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AA />
  </StrictMode>,
)
