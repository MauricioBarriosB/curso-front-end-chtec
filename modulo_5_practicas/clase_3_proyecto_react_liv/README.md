# Modulo 5 / Ejercicio Práctico 3 / Fecha entrega 10-12-24

# : Consumo de API en el Sistema del Hospital

URL Github pública acceso compilación para distribución React JS (sitio SPA productivo) :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_5_practicas/clase_3_proyecto_react_liv/dist

URL Github pública acceso archivos fuente React JS :

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_5_practicas/clase_3_proyecto_react_liv

Todos los requerimientos de la evaluación han sido abordados en la vista MedicalTeamView.jsx : 

* Implementación de Vistas Complejas HomeView: incluye lista de servicios (carga dinámica) e información hospital.

* Implementación de Vistas Complejas MedicalTeamView: incluye carga dinámica data doctores, componente DoctorCard y filtro select por especialidad.

* Implementación de Vistas Complejas AppointmentView: incluye formulario de agenda de citas, validaciones, calendario, hooks, etc.

* DOM Virtual para gestionar la actualización de datos: en general se utilizaron hooks para actualizar el HTML en base a variables reactivas.

* Implementación de Fragmentos: se utilizó en componente principal App.jsx para gestionar la carga de las vistas, la cual se ejecuta mediante el componente HeaderMenu.

* Implementación referencias: vista MedicalTeamView, etc.

* Enfocar automáticamente en un campo de entrada: vista AppointmentView.

* Uso de callback para gestionar el desplazamiento a diferentes secciones: punto de entrada App.jsx, se utilizo React.lazy para cargar las vistas on demand.

* Simulación la obtención de datos del equipo médico y servicios y uso de hooks: aplicado en MedicalTeamView cargado la data desde archivos JSON, etc.

* Optimización de Rendimiento y Uso de Profiler: aplicado en punto de entrada App.jsx, la info de rendimiento es visualizada mediante console.log (solo visible en modo dev).

* Comprobación de Tipos con PropTypes: en todos los componentes que requieren props, estas fueron comprobadas mediante PropTypes.