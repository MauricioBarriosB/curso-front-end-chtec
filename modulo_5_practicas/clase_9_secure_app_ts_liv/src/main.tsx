// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

//import App from './App.tsx'
import AppRoutes from "./routes/AppRoutes";

//   <StrictMode>   </StrictMode>,

createRoot(document.getElementById('root')!).render(

        <AppRoutes />

)