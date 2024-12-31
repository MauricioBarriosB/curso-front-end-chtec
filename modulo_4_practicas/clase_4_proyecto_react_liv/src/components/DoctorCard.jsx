import PropTypes from "prop-types";

import Button from "@commons/Button";

function DoctorCard({ name, photo, specialty, experience, biography, onOpen }) {

  const handleOnClick = (e) => {
    console.log("* Button Clicked :", e.target.dataset.label);
    onOpen(name, photo, specialty, biography);
  };
 
  return (
    <div className="col-lg-4">
      <div className="card dmx-auto">
        <img src={photo} className="card-img-top" alt="doctor" />
        <div className="card-body">
          <h5 className="card-title text-primary">{name}</h5>
          <p className="card-text">Especialidad: {specialty}</p>
          <p className="text-primary">
            • Años experiencia: <strong> {experience} </strong>
          </p>
          <Button label="Ver más detalle" onClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
}

DoctorCard.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  specialty: PropTypes.string,
  experience: PropTypes.number,
  biography: PropTypes.string,
  onOpen: PropTypes.func,
};

export default DoctorCard;
