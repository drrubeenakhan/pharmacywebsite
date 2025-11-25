import { hydrateRoot, createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root')!
const hasSSRContent = rootElement.innerHTML.trim() !== '' && rootElement.innerHTML !== '<!--app-html-->'

if (hasSSRContent) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
