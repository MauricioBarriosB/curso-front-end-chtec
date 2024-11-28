# Modulo 3 / Laboratorio Virtual # 1 / Fecha entrega 28-11-24

URL Github pública acceso al sitio :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_3_practicas/clase_6/

URL Github pública acceso a los archivos y componentes del sitio :

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_3_practicas/clase_6

Sitio Hospital Actualización JS - Página Personas:

* JSON anidados: he estructurado la data de doctores en archivos JSON dentro de los cuales he agregado propiedades anidades "contacto" y "horas".

* Destructuring: mediante bucle "for in" he accedido al detalle de doctores iterando las propiedades del objeto JSON.

* Clonación: he clonado el objeto JSON "specialities.json" en variable "clonedSpecialties".

* Merge: he fusionado 2 JSON (doctores_a.json y doctores_b.json) para luego recorrer y renderizar la data.

* Recorrido: he usado bucle "for in" para extraer la data de doctores y renderizarla en el DOM mediante función "renderDOMElements".

* JSON.stringif: he utilizado el método JSON.stringif para imprimir de la data de doctores obtenida mediante console.log.

* Algoritmo de búsqueda: he utilizado método JS filter para realizar búsqueda de doctores por apellido, aquí valido la data convirtiendo los criterios a minúsculas, etc.

* Complejidad algoritmo de búsqueda: radica en la iteración de elementos y en las validaciones previas (conversión de términos a minúsculas, campo no vacío, etc.)

* Algoritmo de ordenamiento: he utilizado método JS sort para ordenar doctores por años de experiencia, dependiendo de booleano pueden ser ordenados por mayor o menor cantidad de años.

* Complejidad algoritmo de ordenamiento: radica en la iteración de elementos y en las validaciones por índice de elementos a ordenar.

Sitio Hospital Actualización JS - Página Reservas:

* Arreglos: he utilizado arreglos para almacenar en memoria las reservas obtenidas por entrada de usuario (mediante JS "promp").

* Pilas y colas: mediante métodos JS "push", "shift" y "pop" he procesado el array de reservas, el cual posteriormente es renderizado en el DOM.