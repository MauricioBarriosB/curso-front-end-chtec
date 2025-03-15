# Modulo 6 / Ejercicio Práctico 2 - Almacenamiento y Análisis PWA  / Fecha entrega 10-03-25

URL Github pública acceso distribución React (sitio PWA para ser instalado directamente en dispositivos, integración modo sin conexión disponible en PWA) :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_6_practicas/clase_4_pwa_local_ts_liv/dist

URL Github pública acceso archivos fuente React JS:

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_6_practicas/clase_4_pwa_local_ts_liv

URL Documento PDF Reporte Depuración PWA (informe_pwa_liv_hospital.pdf):

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_6_practicas/clase_4_pwa_local_ts_liv/informe_pwa_liv_hospital.pdf

## 1 Implementación de Almacenamiento Web:

* He implementado LocalStorage para almacenar las credenciales (cifradas) de usuario para permitir el modo offline PWA (sin necesidad de volver a iniciar sesión).

## 2 Implementación de IndexedDB:

* He utilizado la librería DEXIE.js (IndexedDB) para administrar los datos en local los cuales son cargados solo en modo Offline.
* Todas las entidades de la base de datos (consumida desde API REST) tienen su simil en la BBDD local a modo de almacenamiento (fichero services/DbLocal.ts).

## 3 Despliegue y Configuración del Service Worker Personalizado :

* He configurado el Service Worker (sw.js) el cual gestiona cache de la aplicación (imagenes, iconos, etc.) mediante Vite Plugin PWA.
* La cache de la aplicación es guardada "on demand" a medida que el usuario navega por las páginas del sitio (para luego ser utilizada en modo offline).

## 4 Protección de Rutas con React Router DOM:

He configurado y protejido las rutas de React Router DOM con el siguiente perfilamiento:

* Nombre de usuario: admin
* Contraseña: adminpass
* Perfil admin tiene acceso a las siguientes páginas: home, pacientes, equipo médico, citas.<br/><br/>
* Nombre de usuario: doctor
* Contraseña: doctorpass
* Perfil doctor tiene acceso a las siguientes páginas: home, pacientes.<br/><br/>
* Nombre de usaurio: guest 
* Contraseña: guestpass
* Perfil guest (invitado) tiene acceso a las siguientes páginas:  home, equipo médico, citas.

## 5 Pruebas de Rendimiento con Lighthouse:

* Adjunto pruebas de rendimiento en el siguiente documento:

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_6_practicas/clase_4_pwa_local_ts_liv/informe_pwa_liv_hospital.pdf