import PropTypes from "prop-types";
import DoctorCard from "./DoctorCard";
import ModalPortal from "../commons/ModalPortal";
import { useState } from "react";

function DoctorsList({ doctors }) {
  const [open, setOpen] = useState(false);

  const [userData, setUserData] = useState({
    fname: '',
    lname: '',
    photo: '',
    specialty: '',
    biography: ''
  });

  const handleClose = () => {
    setOpen(false);
    console.log('* Close ModalPortal');
  };

  const handleOpen = (fname, lname, photo, specialty_name, experience, biography) => {
    setUserData({
      fname: fname,
      lname: lname,
      photo: photo,
      specialty_name: specialty_name,
      experience : experience,
      biography: biography
    });
    setOpen(true);
    console.log('* Open ModalPortal');
  };

  return (
    <>
      <div className="row doctors pt-5">
        {doctors.map((property) => ( 
          <DoctorCard
            key={property.id}
            fname={property.fname}
            lname={property.lname}
            photo={property.photo}
            specialty_name={property.specialty_name}
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
      fname: PropTypes.string.isRequired,
      lname: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      specialty_name: PropTypes.string.isRequired,
      experience: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DoctorsList;