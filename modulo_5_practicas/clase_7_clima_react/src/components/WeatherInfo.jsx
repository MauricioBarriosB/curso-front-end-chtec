// TODO: Agregar validaciones para evitar errores si la estructura de `data` no es la esperada.
// TODO: Incluir más información del clima, como la humedad y la velocidad del viento.

const WeatherInfo = ({ data }) => {
  // BUG: Si `data` es `null` o `undefined`, este componente fallará al intentar acceder a propiedades.
  // TIP: Agregar un chequeo para asegurarse de que `data` tenga un valor válido antes de renderizar.

  return (
    <div className="card text-center">
      <div className="card-body">
        {/* ERROR: Si `data.name` es `undefined`, se mostrará "undefined" en la UI. */}
        <h2 className="card-title">{data.name || 'City not found'}</h2>

        {/* BUG: No se valida si `data.main` o `data.weather[0]` existen antes de acceder a sus propiedades. */}
        <h4 className="card-text">
          {data.main?.temp || 'N/A'}°C - {data.weather?.[0]?.description || 'No description available'}
        </h4>

        {/* TIP: Usar una imagen genérica si el ícono no está disponible. */}
        <img
          src={
            data.weather?.[0]?.icon
              ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
              : 'https://via.placeholder.com/50?text=N/A'
          }
          alt={data.weather?.[0]?.description || 'No description available'}
        />
      </div>
    </div>
  );
};

export default WeatherInfo;