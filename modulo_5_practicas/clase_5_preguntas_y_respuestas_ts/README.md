# Modulo 5 / Ejercicio Práctico Preguntas y Respuestas / Fecha entrega 20-01-25

URL Github pública acceso compilación para distribución React JS (sitio SPA productivo) :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_5_practicas/clase_5_preguntas_y_respuestas_ts/dist

URL Github pública acceso archivos fuente React JS :

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_5_practicas/clase_5_preguntas_y_respuestas_ts

# 1 Preguntas Teóricas sobre TypeScript

A.¿Qué es TypeScript y para qué se utiliza?

TypeScript es un lenguaje de programación que agrega funcionalidad adicional a JS, se utiliza principalmente para dar seguridad a tipos de datos y para hacer comprobaciones en tiempo de compilación (lo cual reduce las posibilidades de cometer errores de programación).

B.¿Cuáles son las principales diferencias entre TypeScript y JavaScript?

TypeScript es un superconjunto de JavaScript, que significa que incluye todas las funcionalidades y sintaxis de este último, pero que añade, además, características adicionales que mejoran la experiencia de desarrollo, como el tipado, etc.

C.¿Por qué es útil TypeScript en el desarrollo de aplicaciones ReactJS?

Por que ayuda en la detección temprana de errores, la autocompletación en editores de código, y la mejora en la productividad y el mantenimiento del código.

D.¿Qué es el sistema de tipos en TypeScript y cómo ayuda a evitar errores en tiempo de desarrollo?

TypeScript tiene un sólido sistema de tipado que permite especificar los tipos de variables y parámetros de funciones en tiempo de compilación. Esto permite la detección temprana de errores relacionados con el tipo, haciendo que el código sea más fiable y menos propenso a errores.

# 2 Ejercicio Práctico: Definiendo Tipos e Inferencia

* He creado la función functions/DoctorFunctions.ts con la comprobación de tipos y parámetros, la cual he implementado en el componente DoctorList.tsx

# 3 Definición de Interfaces y Clases en TypeScript

* He creado la clase junto con su interface classes/DoctorClass.ts con la comprobación de tipos, la cual he implementado en el componente DoctorList.tsx

# 4 Implementación Básica en un Componente TS

* Desarrollo componentes TS: DoctorList.tsx, DoctorCard.tsx y Button.tsx (con props tipados y tipos en todos los componentes).

* Carga de Datos de Doctores mediante API Externa en componente DoctorList.tsx: 

https://capacitaenlinea.cl/demodoctorapi/index.php/doctors?key=mab25

# 5 Ventajas (ejemplos) de TypeScript en el Desarrollo con ReactJS

Al establecer tipos de datos en props y en componentes como DoctorCard.tsx y Button.tsx se reduce la probabilidad de errores, también hay un beneficio en el autocompletado con las herramientas de VSCode, en general, la experienciad de desarrollo es mas robusta.