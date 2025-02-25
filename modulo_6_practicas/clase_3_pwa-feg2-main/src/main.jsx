import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
  .then(()=> console.log('service worker registered'))
  .catch((error)=> console.log('service worker not registered', error));
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
