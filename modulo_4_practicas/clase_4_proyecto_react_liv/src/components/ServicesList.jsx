import React from "react"
import PropTypes from "prop-types";
import Button from "@commons/Button";

const handleOnClick = (e) => {
  let temp = e.target.dataset.label;
  alert(`* Fragment Pressed: ${temp}`);
};

function ServicesList({ services }) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h5 className="mt-1">
          Listado con nuestras Especialidades Médicas disponibles
        </h5>
      </div>
      <div className="card-body">
        {services.map((property) => (
          <React.Fragment key={property.id}>
          <Button
            label={`Fragment ID  ${property.id} | ${property.name}`} 
            onClick={handleOnClick}
          />
          </React.Fragment>
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
