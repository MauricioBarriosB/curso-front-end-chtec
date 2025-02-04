import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import 'bootstrap/dist/bootstrap.css';
//import 'styles.css';

// TODO: Configurar el punto de entrada de la aplicación para manejar errores globales.
// TODO: Agregar un mensaje o spinner de carga inicial antes de renderizar el componente `App`.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);