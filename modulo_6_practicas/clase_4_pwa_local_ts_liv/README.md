# Modulo 6 / Ejercicio Práctico 2 - Almacenamiento y Análisis PWA  / Fecha entrega 10-03-25

URL Github pública acceso distribución React JS (sitio PWA para ser instalado directamente en dispositivos) :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_6_practicas/clase_4_pwa_local_ts_liv/dist

URL Github pública acceso archivos fuente React JS (proyecto debe ser instalado en local desde esta ruta para revisión):

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_6_practicas/clase_4_pwa_local_ts_liv

URL Documento PDF Reporte Depuración PWA (informe_pwa_liv_hospital.pdf):

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_6_practicas/clase_4_pwa_local_ts_liv/informe_pwa_liv_hospital.pdf

## 1 Instalación y ejecución del proyecto:

* Clonar archivos proyecto.
* Instalar dependencias con npm install.
* Ejecutar proyecto con npm run dev.

## 2 Implementación de Almacenamiento Web:

* He implementado LocalStorage para almacenar las credenciales (cifradas) de usuario para permitir el modo offline de la PWA (sin necesidad de volver a iniciar sesión).

## 3 Implementación de IndexedDB:

* He utilizado la librería DEXIE.js (IndexedDB) para administrar los datos en local los cuales son cargados solo en modo Offline.
* Todas las entidades de la base de datos (consumida desde API REST) tienen su simil en la BBDD local a modo de almacenamiento (fichero services/DbLocal.ts).

## 4 Despliegue y Configuración del Service Worker Personalizado :

* He configurado el Service Worker (sw.js) el cual gestiona cache de la aplicación (imagenes, iconos, etc.) mediante Vite Plugin PWA.
* La cache de la aplicación es guardada "on demand" a medida que el usuario navega por las páginas del sitio (para luego ser utilizada en modo offline).

## 5 Pruebas de Rendimiento con Lighthouse:

* Adjunto pruebas de rendimiento en el siguiente documento:

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_6_practicas/clase_4_pwa_local_ts_liv/informe_pwa_liv_hospital.pdf