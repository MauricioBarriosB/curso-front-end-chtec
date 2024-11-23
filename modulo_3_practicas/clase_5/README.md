# Modulo 3 / Tarea práctica # 2 / Fecha entrega 22-11-24

URL Github pública acceso al sitio :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_3_practicas/clase_5/

URL Github pública acceso a los archivos y componentes del sitio :

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_3_practicas/clase_5

Sitio Hospital Actualización JS - Página Reservas:

* Promps / entrada de usuario: he creado una nueva página llamada "Reservas", en la cual he integrado los promp mediante el botón "Ingresar Hora a Reservar".

* Promps / validación de datos: para efectos prácticos, los datos de usuario son validados solo si son ingresados, todo ello mediante expresiones regulares.

* Promps / debugger y manejo de errores: he añadido mensajes de estado por consola mediante conole.log, type error, etc. Además he integrado alerts para informar eventos de usuario. 

* Promps / scope de CONST: he integrado variable CONST dentro del scope principal para seleccionar botón "Ingresar Hora a Reservar" y así asignarle funcionalidad.

* Promps / scope de LET: he integrado variables de datos de usuario LET dentro del scope principal, las cuales son pobladas por el evento del botón "Ingresar Hora a Reservar". 

Sitio Hospital Actualización JS - Página Personas:

* Data dinámica: he extraído los datos listados de doctores mediante archivo JSON.

* Loops: mediante loop for each he poblado el contenedor DIV de doctores dinámicamente. 

* Condicionales: he agregado la condición item.disponible para renderizar solo los doctores que tengan ese como valor verdadero (en el archivo JSON).

* Alert: he integrado una ventana de alerta referenciando la información del doctor presionando el botón "Ver más detalle".

* Debugger y manejo de errores: he utilizado catch error y console log para registrar errores desde el fetch de datos y otros.