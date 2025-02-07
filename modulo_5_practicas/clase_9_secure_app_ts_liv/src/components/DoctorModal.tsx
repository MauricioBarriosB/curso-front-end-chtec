import ReactDOM from "react-dom";
import Button from '../commons/Button';

type ModalPortalTypes = {
    name: string;
    photo: string;
    biography: string;
    specialty_name: string;
    onClose: any;
}

const ModalPortal = ({ name, photo, biography, specialty_name, onClose }: ModalPortalTypes) => {
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
            }}>

            <div onClick={(e) => e.stopPropagation()} className="card text-center m-4" style={{ maxWidth: 600 }}>
                <div className="card-header">
                    <h4 className="mt-1 text-primary">
                        <i className="las la-file-alt"></i> Ficha {name}
                    </h4>
                </div>

                <div className="card-body">
                    <img
                        className="card-img-top"
                        src={photo}
                        alt="doctor"
                    />
                    <h5 className="card-text"><i className="las la-book-medical pt-4"></i> Especialidad: {specialty_name}</h5>
                    <div className="pt-2 d-flex align-items-center"> <p className="text-primary">• Biografía: {biography}</p> </div>
                </div>

                <div className="card-footer text-body-secondary">
                    <Button id="0" desc="0" label="Cerrar Modal" buttonOnClick={onClose} />
                </div>

            </div>
        </div>,
        document.getElementById("modal-root")!
    );
}

export default ModalPortal;