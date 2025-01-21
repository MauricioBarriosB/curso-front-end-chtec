# Formulario con TypeScript y Consumo de API

![Logo](src/assets/logo.jpeg)

Este proyecto es una aplicación React desarrollada con **TypeScript**, diseñada para demostrar las siguientes funcionalidades clave:

- Creación y manejo de un **formulario** en React.
- **Consumo de APIs** mediante funciones asíncronas simuladas.
- Manejo de **notificaciones** para mostrar mensajes de éxito o error.
- Visualización de datos obtenidos desde una **API externa**.

## Características Principales

1. **Formulario**:

   - Permite a los usuarios ingresar su nombre, correo electrónico y un mensaje.
   - Envia los datos a una API simulada.
   - Muestra mensajes de notificación en la interfaz y en la consola.

2. **Consumo de API**:

   - Simula una llamada a una API con respuestas aleatorias de éxito o error.
   - Consume datos reales de la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) para visualización.

3. **Notificaciones**:
   - Muestra mensajes de éxito o error al usuario dependiendo del resultado de la solicitud.
   - Incluye estilos personalizados para distinguir entre notificaciones de éxito y error.

## Estructura del Proyecto

```plaintext
ESPECIALIZACION_FRONTEND_M5_AE2/
├── public/                     # Archivos públicos
├── src/                        # Código fuente
│   ├── components/             # Componentes React
│   │   ├── Form.tsx            # Componente del formulario
│   │   ├── Notification.tsx    # Componente de notificaciones
│   │   ├── ApiData.tsx         # Componente para datos de la API
│   ├── services/               # Funciones para interacciones con APIs
│   │   └── apiService.ts       # Lógica simulada para la API
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx                # Punto de entrada de ReactDOM
│   ├── index.css               # Estilos globales
│   └── types/                  # Definiciones de tipos TypeScript
│       └── models.d.ts         # Tipos personalizados
├── tsconfig.json               # Configuración de TypeScript
├── package.json                # Dependencias y scripts
├── vite.config.ts              # Configuración de Vite
└── README.md                   # Documentación del proyecto
```

## Cómo Ejecutar el Proyecto

### Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v16 o superior).
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/).

### Pasos para Configuración

1. **Clonar el repositorio**:

   ```bash
   git clone git@github.com:adalid-cl/ESPECIALIZACION_FRONTEND_M5_AE2.git
   cd ESPECIALIZACION_FRONTEND_M5_AE2
   ```

2. **Instalar las dependencias**:

   ```bash
   npm install
   ```

3. **Ejecutar la aplicación**:

   ```bash
   npm run dev
   ```

4. Abre tu navegador y ve a `http://localhost:5173`.

## Cómo Funciona

1. **Formulario**:

   - Ingresa datos en los campos del formulario.
   - Haz clic en el botón "Enviar".
   - El formulario enviará los datos a una API simulada:
     - Si tiene éxito, se mostrará una notificación verde.
     - Si falla, se mostrará una notificación roja.

2. **Datos de la API**:

   - La sección "Datos de la API" muestra información obtenida desde JSONPlaceholder.

3. **Notificaciones**:
   - Las notificaciones aparecen debajo del formulario y se diferencian por colores:
     - Verde para éxito.
     - Rojo para errores.

## Tecnologías Utilizadas

- **React**: Librería para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript con tipado estático.
- **Vite**: Herramienta rápida para el desarrollo de aplicaciones modernas.
- **Fetch API**: Para consumir datos reales desde JSONPlaceholder.

## Posibles Mejoras

- Reemplazar la simulación de API por un endpoint real.
- Implementar notificaciones temporales con bibliotecas como `react-toastify`.
- Añadir validaciones más complejas al formulario.

## Soporte

Si tienes preguntas o encuentras algún problema, por favor abre un issue en este repositorio.

## Autor

- [Brayan Diaz C](https://github.com/brayandiazc)

Con ❤️ por [Adalid CL](https://github.com/adalid-cl) 😊
