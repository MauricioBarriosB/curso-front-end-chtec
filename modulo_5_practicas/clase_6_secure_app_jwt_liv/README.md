# Modulo 5 / Ejercicio Práctico 2 - Seguridad en App Hospital / Fecha entrega 03-02-25

URL Github pública acceso compilación para distribución React JS (sitio SPA productivo) :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_5_practicas/clase_6_secure_app_jwt_liv/dist

URL Github pública acceso archivos fuente React JS :

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_5_practicas/clase_6_secure_app_jwt_liv


# 1 Protección de Rutas con React Router DOM:

He configurado y protejido las rutas de React Router DOM con el siguiente perfilamiento:

* Nombre de usuario: admin
* Contraseña: adminpass
* Perfil admin tiene acceso a las siguientes páginas: home, pacientes, equipo médico, citas.
< br / >
* Nombre de usuario: doctor
* Contraseña: doctorpass
* Perfil doctor tiene acceso a las siguientes páginas: home, pacientes.
< br / >
* Nombre de usaurio: guest 
* Contraseña: guestpass
* Perfil guest (invitado) tiene acceso a las siguientes páginas:  home, equipo médico, citas.

# 2 Implementación de Autenticación de Usuarios y Roles:

He implementado autenticación de usuarios, login y signin mediante JWT, los datos son alojados en API REST.

# 3 Consumo de APIs Protegido con API Key y JWT:

He implementado autenticación de recursos de API mediante x-api-key, las claves y rutas han sido seteadas mediante variables de entorno.
He validado el JWT de usuarios desde el backend, creando recursos seguros, para lo cual he desarrollado la siguiente API REST productiva (para tener persistencia de datos a lo largo del proyecto):

https://capacitaenlinea.cl/demohospitalapi/public/api

Los mensajes de error de acceso y peticiones de recursos retornan desde la API REST, validación de token, validación de api key, passwords, etc.

# 4 Prevención de Vulnerabilidades Comunes:

He escapado las entradas del usuario (inputs de formularios) y he utilizado la librería DOMPurify, previniendo que el usuario pueda inyectar código malicioso.

# Encriptación de Datos en el Front-End:

He utilizado CryptoJS para encriptar información sensible de usaurio (la cual se almacena en LocalStorage).