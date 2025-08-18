import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // ✅ Forma correcta (React 18+)
import './index.css'
import App from './App.jsx'

// 1. Obtenemos el elemento root del DOM
const rootElement = document.getElementById('root')

// 2. Creamos un root de React solo si el elemento existe
if (rootElement) {
  const root = createRoot(rootElement) // ✅ Usamos createRoot de react-dom/client

  // 3. Renderizamos la app
  root.render(
    <StrictMode> {/* 👈 Opcional pero recomendado para desarrollo */}
      <App />
    </StrictMode>
  )
}