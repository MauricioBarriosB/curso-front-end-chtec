import ReactDOM from "react-dom";

interface ModalProps {
    fname: string;
    lname: string;
    onClose: (React.MouseEventHandler<HTMLDivElement>);
}

const ModalPortal: React.FC<ModalProps> = ({fname, lname, onClose}) => {

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
                        <i className="las la-file-alt"></i> Ficha {fname} {lname}
                    </h4>
                </div>

            </div>
        </div>,
        document.getElementById("modal-root")!
    );
}

export default ModalPortal;