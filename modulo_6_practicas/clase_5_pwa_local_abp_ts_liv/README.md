# Modulo 6 / Ejercicio Práctico 3 - Implementación Completa de PWA en la Web del Hospital  / Fecha entrega 10-03-25

URL Github pública acceso distribución React (sitio PWA para ser instalado directamente en dispositivos, integración modo sin conexión disponible en PWA) :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_6_practicas/clase_5_pwa_local_abp_ts_liv/dist

URL Github pública acceso archivos fuente React JS:

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_6_practicas/clase_5_pwa_local_abp_ts_liv

URL Documento PDF Reporte Depuración PWA (informe_pwa_liv_hospital.pdf):

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_6_practicas/clase_5_pwa_local_abp_ts_liv/informe_pwa_liv_hospital.pdf

## 1 Creación del Manifiesto y Configuración Inicial :

* He implementado amnifiesto y configuraciones para todo el proyecto.

## 2 Integración de Service Worker para Gestión Avanzada de Caché:

* He configurado el Service Worker (sw.js) el cual gestiona cache de la aplicación (imagenes, iconos, etc.) mediante Vite Plugin PWA.
* La cache de la aplicación es guardada "on demand" a medida que el usuario navega por las páginas del sitio (para luego ser utilizada en modo offline).
* Las caches de archivos estaticos tienen caducación de 1 mes, los datos dinamicos tienen cache "on demand".

## 3 Acceso a Periféricos del Sistema Operativo:

* He implementado acceso a camara para ello he creado la página "Mi Perfil" con la información del usuario, el cual puede acceder a la camara del dispositivo.

## 4 Consumo de API Externa para Datos Médicos:

* Toda la data es almacenada y consultada mediante una API Rest (BBDD externa).

## 5  Pruebas de Rendimiento y Optimización con Lighthouse:

* Adjunto pruebas de rendimiento en el siguiente documento:

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_6_practicas/clase_5_pwa_local_abp_ts_liv/informe_pwa_liv_hospital.pdf