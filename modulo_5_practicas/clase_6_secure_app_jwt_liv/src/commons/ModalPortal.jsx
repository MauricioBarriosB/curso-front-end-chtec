import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Button from "./Button";

function ModalPortal({onClose, userData }) {

  return ReactDOM.createPortal(
    <div onClick={onClose} 
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
      <div onClick={(e)=>e.stopPropagation()} className="card text-center m-4">
        <div className="card-header">
          <h4 className="mt-1 text-primary">
            <i className="las la-file-alt"></i> Ficha {userData.fname} {userData.lname}
          </h4>
        </div>

        <div className="card-body">
        <img
            src={userData.photo}
            alt="doctor"
            style={{ width: 220, height: 150, borderRadius: 15 / 2 }}
          />
          <div className="pt-2"> {userData.biography} </div>
        </div>

        <div className="card-footer text-body-secondary">
          <Button label="Cerrar Modal" onClick={onClose} />
        </div>
        
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}


ModalPortal.propTypes = {
  onClose: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
};

export default ModalPortal;
