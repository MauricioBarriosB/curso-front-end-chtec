# Modulo 6 / Ejercicio Práctico 3 - Implementación Completa de PWA en la Web del Hospital  / Fecha entrega 10-03-25

URL Github pública acceso distribución React (sitio PWA para ser instalado directamente en dispositivos, integración modo sin conexión disponible en PWA) :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_6_practicas/clase_5_pwa_local_abp_ts_liv/dist

URL Github pública acceso archivos fuente React JS (TypeScript):

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_6_practicas/clase_5_pwa_local_abp_ts_liv

URL Documento PDF Reporte Depuración PWA (informe_pwa_liv_hospital.pdf):

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_6_practicas/clase_5_pwa_local_abp_ts_liv/informe_pwa_liv_hospital.pdf

## 1 Creación del Manifiesto y Configuración Inicial :

* He implementado manifiesto y configuraciones para todo el proyecto.

## 2 Integración de Service Worker para Gestión Avanzada de Caché:

* He configurado el Service Worker (sw.js) el cual gestiona cache de la aplicación (imagenes, iconos, etc.) mediante Vite Plugin PWA.
* La cache de la aplicación es guardada "on demand" a medida que el usuario navega por las páginas del sitio (para luego ser utilizada en modo offline).
* Las caches de archivos estaticos tienen caducación de 1 mes, los datos dinamicos desde BBDD tienen cache "on demand".

## 3 Acceso a Periféricos del Sistema Operativo:

* He implementado acceso a periférico para ello he creado la página "Mi Perfil" con la información del usuario, el cual puede acceder a la camara del dispositivo.

## 4 Consumo de API Externa para Datos Médicos:

* Toda la data es almacenada y consultada mediante una API Rest (services/DocsApi.ts), lugo los datos son guardados en local "ondemand" en bade de datos Indexed DB (services/BbLocal.ts)

## 5 Protección de Rutas con React Router DOM:

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

## 6 Pruebas de Rendimiento y Optimización con Lighthouse:

* Adjunto pruebas de rendimiento en el siguiente documento:

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_6_practicas/clase_5_pwa_local_abp_ts_liv/informe_pwa_liv_hospital.pdf