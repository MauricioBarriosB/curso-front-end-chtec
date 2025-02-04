# Modulo 5 / Ejercicio Práctico 3 - Uso de Hooks y Manejo de Errores / Fecha entrega 03-02-25

URL Github pública acceso compilación para distribución React JS (sitio SPA productivo) :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_5_practicas/clase_8_secure_app_hook_liv/dist

URL Github pública acceso archivos fuente React JS :

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_5_practicas/clase_8_secure_app_hook_liv


# 1 Uso de useState para la Gestión de Estado:

Utilizado en múltiples componentes para almacenar data de usuario y manejar el estado de la app.

# 2 Uso de useEffect para la Gestión de Efectos Secundarios:

Utilizado en múltiples componentes como DorctorList, peticiones a API, etc.

# 3 Construcción de un Hook Personalizado:

He implementado Hook Personalizado para manejar todos los formularios de la APP.

# 4 Manejo de Errores en la Aplicación:

Todas las peticiones y operaciones poseen manejo de errores (mensajes errores de peticiones son enviados por la API REST).

# 5 Aplicación Correcta de las Reglas de los Hooks:

He aplicado el Hook personalizado para manejo de todos los formularios (aqui se he utilizado DOMPurify en los inputs, entre otras validaciones).

# 6 Rutas de React Router DOM y Perfilamiento:

* Nombre de usuario: admin
* Contraseña: adminpass
* Perfil admin tiene acceso a las siguientes páginas: home, pacientes, equipo médico, citas.

* Nombre de usuario: doctor
* Contraseña: doctorpass
* Perfil doctor tiene acceso a las siguientes páginas: home, pacientes.

* Nombre de usaurio: guest 
* Contraseña: guestpass
* Perfil guest (invitado) tiene acceso a las siguientes páginas:  home, equipo médico, citas.