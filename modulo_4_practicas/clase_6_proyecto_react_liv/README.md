# Modulo 4 /  Evaluación M4 - Ejercicio Práctico 2 / Fecha entrega 27-12-24

# Manejo Avanzado del DOM y Elementos ReactJS

URL Github pública acceso compilación para distribución React JS (sitio SPA productivo) :

https://mauriciobarriosb.github.io/curso-front-end-chtec/modulo_4_practicas/clase_4_proyecto_react_liv/dist

URL Github pública acceso archivos fuente React JS :

https://github.com/MauricioBarriosB/curso-front-end-chtec/tree/main/modulo_4_practicas/clase_4_proyecto_react_liv

Los requerimientos de la evaluación han sido abordados en: 

* Manejo del DOM Virtual: Fueron abordados múltiples componentes manejando virtualmente el DOM.

* Explicación del DOM Virtual: carda de datos en componente DoctorCard, CategoryView mediente el DOM virtual, etc. Utilización de lazy loading para carga vista administración de perfiles de usuario, etc.

* Utilización useEffect: se utilizo useEffect en componente PageMedicalTeam para gestionar carga de datos y renderizado.

* Uso de Referencias: en componente AppointmentForm se ha guardado la referencia refUserName al validar formulario.

* Callback en formulario: en componente AppointmentForm se han guardado los campos formulario mediante función handleChange() además se han validado todos los campos de formulario mediante función handleSubmit().

* Uso de Fragmentos: en componente ServicesList se utilizó React.Fragment para generar cada elemento.

* Uso de Context: se utilizó context para administrar los perfiles de usuario del sitio en componente ProfileView (anexos ProfileForm y ProfileContext).

* Verificación de tipos con PropTypes: todos los componentes que requieren props fueron validados con PropTypes.

* Componente de Orden Superior y Portal: creación de componente ModalPortal el cual carga los datos de doctores mediante props, se utiliza un único componente para mostrar la data, el cual esta desacoplado de la estructura del root principal (mediante Portal de React).

* Optimización de Rendimiento y Profiler: se utilizó React Profiler en componente PageMedicalTeam haciendo referencia a componente DoctorsList (el cual tiene mayor incidencia en la aplicación), se evaluó el buen compomportamiento y tiempo de renderizado y actualización del componente.