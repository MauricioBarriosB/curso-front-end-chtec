# Modulo 3 / Laboratorio Virtual # 2 / Fecha entrega 06-12-24

URL Github pública acceso al sitio :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_3_practicas/clase_7/

URL Github pública acceso a los archivos y componentes del sitio :

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_3_practicas/clase_7

Programación Funcional en JavaScript:

* Implementa una función que use currying para calcular el costo total de los servicios de un paciente en función del número de consultas realizadas y el precio de cada consulta: 
Requerimiento implementado en página dashboard.html en la función getCostService(), accesible mediante el botón superior "Consultar Valor".

* Usa la función flecha para simplificar la sintaxis en una función que calcule el tiempo promedio de espera de los pacientes:
Requerimiento implementado en página dashboard.html en la función getMediaTime(), accesible mediante el botón superior "Promedio espera".

* Implementa la recursión para calcular de forma recursiva el total de horas de consulta de un doctor a lo largo de la semana:
Requerimiento implementado en página dashboard.html en la función getTotalHoursByDoc(), accesible mediante el botón superior "Total Horas Doctor".

* Integra composición de funciones para aplicar descuentos a los costos de consultas en base a la cantidad de consultas realizadas:
Requerimiento implementado en página dashboard.html en la función getDiscount(), accesible mediante el botón superior "Revisar Descuentos".

Programación Orientada a Eventos y Programación Asíncrona:

* Implementa un listener para capturar el envío del formulario y muestra un mensaje de confirmación:
Requerimiento implementado en página contacto.html el evento es capturado mediante el botón "Enviar Formulario de Contacto", la data ingresada se muestra mediante console.log.

* Dispara un evento personalizado que simule la llegada de un nuevo paciente, ostrando una notificación en la página:
Requerimiento implementado en página contacto.html, el evento se llama patientEvent y es lanzado por un setTimeOut.

* Implementa una función async/await para simular una llamada a una API REST que obtenga los datos de los doctores. Usa Promise para manejar los casos de éxito o fallo:
Requerimiento implementado en página dashboard.html en la función getDoctors(), la función es llamada una vez que el DOM esta cargado.

* Implementa el manejo de errores utilizando try/catch en las funciones asíncronas, y define un callback que se invoque al fallar una petición simulada:
Requerimiento implementado en página dashboard.html en la función getDoctors(), capura de errores, console.log, etc.

Programación Orientada a Objetos en JavaScript

* Implementa una clase doctor:
Requerimiento implementado en página dashboard.html.

* Añade un método para mostrar la información de cada doctor y otro para calcular el total de pacientes atendidos por el doctor:
Requerimiento implementado en página dashboard.html.

* Crea una subclase de Doctor, por ejemplo Cirujano, que extienda las funcionalidades de la clase base:
Requerimiento implementado en página dashboard.html, la función es llamada mediante el evento del botón superior "Crear Cirujano".

* Implementa el encapsulamiento en la clase, protegiendo la propiedad de años de experiencia mediante un getter y un setter:
Requerimiento implementado en página dashboard.html.

* Usa el polimorfismo para sobrescribir un método en la subclase Cirujano que calcule el número de operaciones realizadas en lugar de consultas:
Requerimiento implementado en página dashboard.html, la función es llamada mediante el evento del botón superior "Operaciones Cirujano".