import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Actresses from './Actresses.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Actresses />
  </StrictMode>,
)
