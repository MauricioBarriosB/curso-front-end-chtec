import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

//import App from './App.tsx'
import AppRoutes from "./routes/AppRoutes";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppRoutes />
    </StrictMode>,
)