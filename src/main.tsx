import "@fontsource/poppins/400.css"  // Regular
import "@fontsource/poppins/600.css"  // Semi-bold
import "@fontsource/poppins/700.css"  // Bold
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
