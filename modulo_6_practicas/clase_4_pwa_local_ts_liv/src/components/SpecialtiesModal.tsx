import ReactDOM from "react-dom";
import Button from "../commons/Button";

type ModalSpecialtiesTypes = {
    name: string | undefined;
    desc: string | undefined;
    onClose: any;
}

const ModalSpecialties = ({ name, desc, onClose }: ModalSpecialtiesTypes) => {
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
            <div onClick={(e) => e.stopPropagation()} className="card text-center m-4">
                <div className="card-header">
                    <h4 className="mt-1 text-primary">
                        Especialidad {name}
                    </h4>
                </div>
                <div className="card-body">
                    <h4><i className="las la-cog"></i>  Descripción de la especialidad</h4>
                    <div> {desc} </div>
                </div>
                <div className="card-footer text-body-secondary">
                    <Button id="0" desc="0" label="Cerrar Modal" buttonOnClick={onClose} />
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")!
    );

}

export default ModalSpecialties;