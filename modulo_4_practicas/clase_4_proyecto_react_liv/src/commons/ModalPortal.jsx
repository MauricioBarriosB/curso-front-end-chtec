import ReactDOM from "react-dom";

function ModalPortal({ children, onClose }) {
  
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default ModalPortal;