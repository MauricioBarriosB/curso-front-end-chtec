import PropTypes from "prop-types";
import DoctorCard from "./DoctorCard";
import ModalPortal from "@commons/ModalPortal";
import { useState } from "react";

function DoctorsList({ doctors }) {
  const [open, setOpen] = useState(false);

  const [userData, setUserData] = useState({
    name: '',
    photo: '',
    specialty: '',
    biography: ''
  });

  const handleClose = () => {
    setOpen(false);
    console.log('* Close ModalPortal');
  };

  const handleOpen = (name, photo, specialty, biography) => {
    setUserData({
      name: name,
      photo: photo,
      specialty:specialty,
      biography:biography
    });
    setOpen(true);
    console.log('* Open ModalPortal');
  };

  return (
    <>
      <div className="row doctors">
        {doctors.map((property) => (
          <DoctorCard
            key={property.id}
            name={property.name}
            photo={property.photo}
            specialty={property.specialty}
            experience={property.experience}
            biography={property.biography}
            onOpen={handleOpen}
          />
        ))}
      </div>

      {open && (
        <ModalPortal onClose={handleClose} userData={userData}></ModalPortal>
      )}

    </>
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
  ).isRequired,
};

export default DoctorsList;