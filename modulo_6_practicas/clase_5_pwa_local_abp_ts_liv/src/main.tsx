// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

//import App from './App.tsx'
 import AppRoutes from "./routes/AppRoutes"; // AppRoutes   //     <StrictMode>


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(() => console.log("Service Worker registrado"))
    .catch(error => console.log("Error en Service Worker", error));
}


createRoot(document.getElementById('root')!).render(

        <AppRoutes />

)