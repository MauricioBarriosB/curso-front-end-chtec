// TODO: Considerar mejorar la presentación del mensaje de error, podría incluir un botón para cerrar la alerta.
const ErrorAlert = ({ message }) => {
  // BUG: Este componente no verifica si el mensaje está vacío. Esto puede causar que se renderice un cuadro vacío.
  // TIP: Agregar una validación para evitar renderizar si no hay mensaje.
  return (
    <div className="alert alert-danger text-center">
      {/* ERROR: Si `message` no es una cadena, esto podría causar un error. */}
      {message}
    </div>
  );
};

export default ErrorAlert;