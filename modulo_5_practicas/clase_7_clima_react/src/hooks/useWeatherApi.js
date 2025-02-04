import { useState } from "react";

// TODO: Implementar un estado de carga (loading) para indicar cuándo la API está siendo llamada.
// TODO: Manejar casos donde la respuesta de la API no incluya datos esperados o válidos.

const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // BUG: No se maneja un estado de carga para mostrar un spinner o mensaje al usuario.
  const fetchWeather = async (city) => {
    // ERROR: Nombre de la variable de entorno incorrecto.
    const API_KEY = import.meta.env.VITE_API_KEY; // El nombre correcto es `VITE_WEATHER_API_KEY`.
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      setError(null);
      setWeatherData(null);

      // BUG: No se maneja el caso de tiempo de espera o conexión lenta.
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("City not found"); // ERROR: Mensaje de error genérico; debería ser más descriptivo.
      }

      const data = await response.json();

      // BUG: No se valida si `data` contiene los campos esperados antes de usarlo.
      setWeatherData(data);
    } catch (err) {
      // ERROR: No se diferencian los tipos de errores (red, clave de API inválida, etc.).
      setError(err.message || "An unknown error occurred");
    }
  };

  return { weatherData, error, fetchWeather };
};

export default useWeatherApi;
