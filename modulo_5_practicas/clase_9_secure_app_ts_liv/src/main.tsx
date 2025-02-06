import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
// import App from './App.tsx'   //     <App />

//import Login from './pages/Login.tsx';

import AppRoutes from "./routes/AppRoutes";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <AppRoutes />
  </StrictMode>,
)