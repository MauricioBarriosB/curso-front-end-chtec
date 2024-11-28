# Modulo 3 / Laboratorio Virtual # 1 / Fecha entrega 28-11-24

URL Github pública acceso al sitio :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_3_practicas/clase_6/

URL Github pública acceso a los archivos y componentes del sitio :

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_3_practicas/clase_6

Sitio Hospital Actualización JS - Página Personas:

* JSON anidados: la data de doctores esta estrcturada en JSON dentro del cual he agregado propiedades anidades "contact" y "hours".

* Destructuring: mediante bucle "for in" he accedido al detalle de doctores mediante las propiedades del objeto JSON.

* Clonación: he clonado el objeto JSON "specialities.json" en variable clonedSpecialties.

* Merge: he fusionado 2 JSON (doctores_a.json y doctores_b.json) para luego recorrer la data y renderizarla en el DOM.

* Recorrido: he usado bucle for in para extraer la data de doctores y renderizarla en el DOM.

* JSON.stringif: he utilizado el método JSON.stringif para imprimir de la data de doctores obtenida mediante console.log.

* Algoritmo de búsqueda: he utilizado método JS filter para realizar búsqueda de doctores por apellido, aquí valido la data convirtiendo los criterios a minúsculas, etc.

* Complejidad algoritmo de búsqueda: radica en la iteración de elementos y en las validaciones previas (conversión de términos a minúsculas, campo no vacío, etc.)

* Algoritmo de ordenamiento: he utilizado método JS sort para ordenar doctores por años de experiencia, dependiendo de booleano pueden ser ordenados por mayor o menor.

* Complejidad algoritmo de ordenamiento: radica en la iteración de elementos y en las validaciones por índice de elementos a ordenar.

Sitio Hospital Actualización JS - Reservas:

* Arreglos: he utilizado arreglos para almacenar en memoria las reservas obtenidas por entrada mediante "promp".

* Pilas y colas: mediante métodos como push, shift y pop he procesado el array de reservas, el cual posteriormente es renderizado en el DOM. 
















* Promps / entrada de usuario: he creado una nueva página llamada "Reservas", en la cual he integrado los promp mediante el botón "Ingresar Hora a Reservar".

* Promps / validación de datos: para efectos prácticos, los datos de usuario son validados solo si son ingresados, todo ello mediante expresiones regulares.

* Promps / debugger y manejo de errores: he añadido mensajes de estado por consola mediante conole.log, type error, etc. Además he integrado alerts para informar eventos de usuario. 

* Promps / scope de CONST: he integrado variable CONST dentro del scope principal para seleccionar botón "Ingresar Hora a Reservar" y así asignarle funcionalidad.

* Promps / scope de LET: he integrado variables de datos de usuario LET dentro del scope principal, las cuales son pobladas por el evento del botón "Ingresar Hora a Reservar". 

Sitio Hospital Actualización JS - Página Personas:

* Data dinámica: he extraído los datos listados de doctores mediante archivo JSON.

* Loops: mediante loop for each he poblado el contenedor DIV de doctores dinámicamente. 

* Condicionales: he agregado la condición item.disponible para renderizar solo los doctores que tengan ese campo como valor verdadero (en el archivo JSON).

* Alert: he integrado una ventana de alerta referenciando la información del doctor presionando el botón "Ver más detalle".

* Debugger y manejo de errores: he utilizado catch error y console log para registrar errores desde el fetch de datos y otros.