// TODO: Agregar validación para evitar que se envíe el formulario con el campo vacío.
const WeatherForm = ({ query, setQuery, onSearch }) => {
  return (
    <div className="d-flex justify-content-center mb-4">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Enter city name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="btn btn-primary ms-2"
        onClick={() => {
          // BUG: No se valida si el campo de texto está vacío antes de ejecutar la función.
          // TIP: Agregar una validación para mostrar un mensaje si el usuario intenta buscar sin ingresar una ciudad.
          onSearch();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default WeatherForm;