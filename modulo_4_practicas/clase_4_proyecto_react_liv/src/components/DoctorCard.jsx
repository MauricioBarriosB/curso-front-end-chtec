import PropTypes from "prop-types";

function DoctorCard({ name, photo, specialty, experience }) {
  return (
    <div className="col-lg-4">
      <div className="card dmx-auto"> 
        <img src={photo} className="card-img-top" alt="doctor" />
        <div className="card-body">
          <h5 className="card-title text-primary">{name}</h5>
          <p className="card-text">Especialidad: {specialty}</p>
          <p className="text-primary">• Años experiencia: <strong> {experience} </strong></p>
          <a className="btn btn-primary">Ver más detalle &raquo;</a>
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
};

export default DoctorCard;
