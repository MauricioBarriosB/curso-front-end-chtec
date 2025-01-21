# Modulo 5 / Ejercicio Práctico Preguntas y Respuestas / Fecha entrega 20-01-25

# Consumo de API en el Sistema del Hospital

URL Github pública acceso compilación para distribución React JS (sitio SPA productivo) :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_5_practicas/clase_5_preguntas_y_respuestas_ts/dist

URL Github pública acceso archivos fuente React JS :

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_5_practicas/clase_5_preguntas_y_respuestas_ts

Todos los requerimientos de la evaluación han sido abordados en la vista MedicalTeamView.jsx : 

* Usa los Hooks useEffect y useState para realizar peticiones a una API externa: he creado el servicio src/services/DocsApi.js el cual se conecta a la siguiente API:

https://capacitaenlinea.cl/demodoctorapi/index.php/doctors?key=mab25

Esta API publica la he creado en PHP para enviar y devolver las peticiones GET y POST, mediante la cual se cargan los datos en el componente DoctorList.jsx.

* Uso de Axios para el Consumo de la API: el servicio src/services/DocsApi.js fue implementado mediante Axios, fue elegido Axios por su simplicidad para cargar datos de manera asíncrona.

* Peticiones Basadas en Eventos del Usuario: en la vista MedicalTeamView el evento handleSelectChange se encarga de llamar al servicio y extraer los datos dependiendo del ID de especialidad de cada Doctor (los parametros del endpoint los he enviado mediante la URL).

* Manejo de Errores en Peticiones Asíncronas: el servicio posee manejo de errores, además, la vista MedicalTeamView carga un mensaje de error en caso de fallo de la API, etc.

* Optimización del Rendimiento al Omitir Efectos: en la vista la vista MedicalTeamView he creado un useState con la data de servicios, lo cual reduce el tiempo de carga, ya que no se vuelve a interpretar el listado de servicios (si la data de doctores cambia).