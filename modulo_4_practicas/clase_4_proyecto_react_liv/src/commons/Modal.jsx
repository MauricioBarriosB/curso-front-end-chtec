import PropTypes from "prop-types";
import Button from "@commons/Button";

function Modal({ isOpen, onClose, userData }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 900,
      }}
    >
      <div className="card text-center m-4">
        <div className="card-header">
          <h4 className="mt-1 text-primary"> <i className="las la-file-alt"></i> Ficha Doctor {userData.name}</h4>
        </div>
        <div className="card-body">
          <img
            src={userData.photo}
            alt="doctor"
            style={{ width: 220, height: 150, borderRadius: 15 / 2 }}
          />

          <div className="mt-2">Especialidad doctor: {userData.specialty}</div>
          <div>Biografía doctor: {userData.biography}</div>
        </div>

        <div className="card-footer text-body-secondary">
          <Button label="Cerrar Modal" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  userData: PropTypes.object,
};

export default Modal;
