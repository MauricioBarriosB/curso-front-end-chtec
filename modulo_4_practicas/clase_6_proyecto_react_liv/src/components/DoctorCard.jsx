import PropTypes from "prop-types";
import Button from "@commons/Button";

function DoctorCard({ fname, lname, photo, specialty, experience, biography, onOpen }) {

  const handleOnClick = (e) => {
    console.log("* Button Clicked :", e.target.dataset.label);
    onOpen(fname, lname, photo, specialty, experience, biography);
  };

  return (
    <div className="col-lg-4">
      <div className="card dmx-auto">
        <img src={photo} className="card-img-top" alt="doctor" />
        <div className="card-body">
          <h5 className="card-title text-primary">{fname} {lname}</h5>
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
  fname: PropTypes.string,
  lname: PropTypes.string,
  photo: PropTypes.string,
  specialty: PropTypes.string,
  experience: PropTypes.number,
  biography: PropTypes.string,
  onOpen: PropTypes.func,
};

export default DoctorCard;
