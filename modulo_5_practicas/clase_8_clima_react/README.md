# WeatherApp

![Adalid Logo](src/assets/logo.jpeg)

**WeatherApp** es una aplicación React diseñada para consumir datos de una API de clima en tiempo real. Los estudiantes deberán identificar y corregir errores, implementar características pendientes y mejorar la funcionalidad para que la app sea completamente funcional.

## Objetivo

El objetivo de este proyecto es aprender a consumir APIs, manejar estado y efectos en React, optimizar el rendimiento, gestionar errores y aplicar buenas prácticas en el desarrollo de aplicaciones Cliente/Servidor.

## Características Principales

1. **Búsqueda de Clima por Ciudad**:

   - Los usuarios pueden buscar el clima actual escribiendo el nombre de cualquier ciudad.
   - Muestra datos como:
     - Temperatura actual, mínima y máxima.
     - Sensación térmica.
     - Humedad.
     - Velocidad y dirección del viento.
     - Descripción del clima (despejado, nublado, lluvia, etc.).
     - Hora del amanecer y atardecer.

2. **Consumo de API en React**:

   - Uso de la API de [OpenWeatherMap](https://openweathermap.org/) para obtener datos del clima.
   - Implementación utilizando `Fetch API`.

3. **Errores y Tareas Pendientes**:

   - El proyecto incluye errores intencionales y funcionalidades incompletas para retar a los estudiantes:
     - Errores en rutas e importaciones.
     - Validaciones faltantes en los inputs.
     - Estado de carga (`loading`) no implementado.
     - Manejo básico y simplista de errores en la API.

4. **Diseño Responsivo**:
   - Uso de **Bootstrap** para una experiencia de usuario adaptativa.

## Estructura del Proyecto

```plaintext
WeatherApp/
├── public/                     # Archivos públicos
├── src/                        # Código fuente
│   ├── components/             # Componentes reutilizables
│   │   ├── FormWeather.jsx     # Formulario para buscar el clima (nombre erróneo)
│   │   ├── InfoWeather.jsx     # Mostrar la información del clima (nombre erróneo)
│   │   ├── Error.jsx           # Componente para mostrar errores (nombre erróneo)
│   ├── hooks/                  # Hooks personalizados
│   │   ├── weatherApiHook.js   # Hook para consumir la API del clima (nombre erróneo)
│   ├── styles.css              # Estilos globales
│   ├── application.jsx         # Componente principal (nombre erróneo)
│   ├── main.jsx                # Punto de entrada de ReactDOM
├── .env                        # Variables de entorno para la API Key
├── package.json                # Configuración del proyecto y dependencias
├── vite.config.js              # Configuración de Vite
├── README.md                   # Documentación del proyecto
```

## Errores y Tareas Pendientes

1. **Errores en el Código**:

   - Importaciones incorrectas de componentes (`FormWeather`, `InfoWeather`, `Error`).
   - Ruta mal escrita para el hook `useWeatherApi`.
   - Variable de entorno `VITE_WEATHER_API_KEY` mal nombrada como `VITE_API_KEY`.
   - Faltan validaciones en el input de búsqueda.

2. **Tareas Pendientes**:

   - Implementar un estado de carga (`loading`) para mostrar un spinner mientras se realiza una petición a la API.
   - Manejar y diferenciar los errores según el código de respuesta HTTP (404, 500, etc.).
   - Validar los datos recibidos de la API antes de renderizarlos.
   - Mostrar un mensaje placeholder cuando no hay datos ni errores.

3. **Optimización del Código**:
   - Separar la lógica de validación y manejo de errores en funciones auxiliares.

## Cómo Ejecutar el Proyecto

### Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v16 o superior).
- [npm](https://www.npmjs.com/).

### Pasos para Configuración

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/adalid-cl/ESPECIALIZACION_FRONTEND_M5_AE4.git
   cd ESPECIALIZACION_FRONTEND_M5_AE4
   ```

2. **Instalar las dependencias**:

   ```bash
   npm install
   ```

3. **Configurar la API Key**:

   - Regístrate en [OpenWeatherMap](https://openweathermap.org/) y obtén tu API Key.
   - Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
     ```plaintext
     VITE_WEATHER_API_KEY=tu_api_key_aqui
     ```

4. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.

## Retos para los Estudiantes

1. **Corregir Importaciones y Rutas**:

   - Identificar y arreglar los nombres incorrectos de componentes y archivos.

2. **Validar Entradas**:

   - Implementar validaciones en el input para evitar búsquedas vacías o con caracteres no válidos.

3. **Manejo de Errores**:

   - Diferenciar entre errores de red, ciudad no encontrada, o API Key inválida.

4. **Estado de Carga**:

   - Agregar un spinner o mensaje de carga mientras se espera la respuesta de la API.

5. **Validar Datos de la API**:

   - Comprobar que los datos recibidos contienen los campos esperados antes de usarlos.

6. **Diseño Mejorado**:
   - Personalizar los estilos para que la app sea más atractiva.

## Notas de Seguridad

- Asegúrate de no exponer la clave de API en el código fuente. Utiliza variables de entorno para mantenerla segura.
- Las validaciones deben realizarse tanto en el cliente como en el servidor en entornos reales.

## Soporte

Si tienes preguntas o encuentras algún problema, por favor abre un issue en este repositorio o contacta al autor.

## Autor

- [Brayan Diaz C](https://github.com/brayandiazc)

Con ❤️ por [Adalid CL](https://github.com/adalid-cl) 😊
