import PropTypes from "prop-types";
import DoctorCard from "./DoctorCard";

function DoctorsList({ doctors }) {
  return (
    <div className="row doctors">
      {doctors.map((property) => (
        <DoctorCard
          key={property.id}
          name={property.name}
          photo={property.photo}
          specialty={property.specialty}
          experience={property.experience}
        />
      ))}
    </div>
  );
}

DoctorsList.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
      experience: PropTypes.number.isRequired,
    })
  ).isRequired
};

export default DoctorsList;