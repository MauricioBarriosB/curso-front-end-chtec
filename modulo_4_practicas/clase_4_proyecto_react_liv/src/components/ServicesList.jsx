import PropTypes from "prop-types";

function ServicesList({ services }) {
  return (

      <div className="card text-center">
        <div className="card-header">
          <h5 className="mt-1"> Listado con especialidades nuestras esecialidades médicas disponibles </h5>
        </div>
        <div className="card-body">
          {services.map((property) => (
            <a key={property.id} className="btn btn-primary m-2">
              {property.name} &raquo;
            </a>
          ))}
        </div>
        <div className="card-footer text-body-secondary">
          <p className="fw-bold text-primary m-0">
          Presione cada botón para obtener mayor información acerca de nuestras especialidades
          </p>
        </div>
      </div>

  );
}

ServicesList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServicesList;
