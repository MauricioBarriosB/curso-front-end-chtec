import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Button from "./Button";

function ModalServices({onClose, itemData }) {
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
            Especialidad {itemData.name}
          </h4>
        </div>
        <div className="card-body">
          <h4><i className="las la-cog"></i>  Descripción de la especialidad</h4>
          <div> {itemData.desc} </div>
        </div>
        <div className="card-footer text-body-secondary">
          <Button label="Cerrar Modal" onClick={onClose} />
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

ModalServices.propTypes = {
  onClose: PropTypes.func.isRequired,
  itemData: PropTypes.object.isRequired,
};

export default ModalServices;