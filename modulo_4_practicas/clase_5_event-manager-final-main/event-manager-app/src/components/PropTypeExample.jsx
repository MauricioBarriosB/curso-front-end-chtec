import PropTypes from "prop-types";

function PropTypeExample({ title, count }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>El valor del contador es: {count}</p>
    </div>
  );
}

// Validación de tipos de propiedades
PropTypeExample.propTypes = {
  title: PropTypes.string.isRequired, // Propiedad obligatoria de tipo string
  count: PropTypes.number, // Propiedad opcional de tipo number
};

// Valores predeterminados para las propiedades
PropTypeExample.defaultProps = {
  count: 0, // Si no se pasa `count`, usará 0 por defecto
};

export default PropTypeExample;
