# Modulo 5 / Ejercicio Práctico 4 - APIs, TypeScript, y Seguridad / Fecha entrega 03-02-25

URL Github pública acceso compilación para distribución React JS (sitio SPA productivo) :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_5_practicas/clase_9_secure_app_ts_liv/dist

URL Github pública acceso archivos fuente React JS :

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_5_practicas/clase_9_secure_app_ts_liv


## 1 Consumo de APIs usando Fetch API o Axios:

Todos los recursos son consumidos mediante Axios para lo cual implemente el servicio DocsApi.js se conecta con API REST productiva desarrollada en PHP+MySQL a medida para el proyecto:

https://capacitaenlinea.cl/demohospitalapi/public/api

Todo ello para tener persistencia de datos, creación y validación de JWT (mediante backend), validación de x-api-key, recursos de aplicación, registro de acceso, etc.

He integrado solicitudes GET, POST, PUT, DELETE, por ejemplo, en vista Patients.jsx rol administrador y doctor tienen acceso al CRUD de pacientes, entre otros.

## 2 Integración de TypeScript en Componentes:

He utilizado TS y validado los tipos en todos los compoenentes clave, estados, estructura de código, etc..

## 3 Mejoras en la Seguridad del Front-End:

He implementado API REST en servidor productivo con validación de JWT (formato, fecha de expiración, etc.) y validación de x-api-key, los datos de acceso a la API fueron seteados mediante variables de entorno.

## 4 Optimización con Hooks y Manejo de Errores:

Todas las peticiones y operaciones poseen manejo de errores, todos los hooks fueron debidamente optimizados.

## 5 Rutas de React Router DOM y Perfilamiento:

* Nombre de usuario: admin
* Contraseña: adminpass
* Perfil admin tiene acceso a las siguientes páginas: home, pacientes, equipo médico, citas.<br/><br/>
* Nombre de usuario: doctor
* Contraseña: doctorpass
* Perfil doctor tiene acceso a las siguientes páginas: home, pacientes.<br/><br/>
* Nombre de usaurio: guest 
* Contraseña: guestpass
* Perfil guest (invitado) tiene acceso a las siguientes páginas:  home, equipo médico, citas.