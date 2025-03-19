import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MapProvider from './components/Map/MapProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapProvider>
      <App />
    </MapProvider>
  </StrictMode>,
)
