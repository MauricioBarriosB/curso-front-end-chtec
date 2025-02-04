import { useState } from 'react';

// ERROR: Nombres de componentes mal escritos.
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import ErrorAlert from './components/ErrorAlert';

// ERROR: Ruta incorrecta para el hook personalizado.
import useWeatherApi from './hooks/useWeatherApi';

const App = () => {
  const [query, setQuery] = useState('');

  // TODO: Agregar estado para manejar la carga (loading) y mostrar un spinner.
  const { weatherData, error, fetchWeather } = useWeatherApi();

  const handleSearch = () => {
    // BUG: No se valida si el nombre de la ciudad tiene caracteres válidos (por ejemplo, no numéricos).
    // TIP: Implementar validación para evitar nombres de ciudad inválidos.
    if (query.trim()) {
      fetchWeather(query);
    } else {
      console.log('Please enter a valid city name.'); // ERROR: Mensaje no se muestra al usuario.
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Weather App</h1>

      {/* ERROR: El componente `WeatherForm` no se importa correctamente debido a un error en el nombre de la ruta. */}
      <WeatherForm query={query} setQuery={setQuery} onSearch={handleSearch} />

      {/* TODO: Mejorar la presentación del error, como usar un botón de cierre. */}
      {error && <ErrorAlert message={error} />}

      {/* ERROR: Si no hay datos y no hay error, el diseño no muestra ningún mensaje. */}
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
};

export default App;