import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import { StaticRouter } from 'react-router-dom'
import App from './App'

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
}
