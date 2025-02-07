import React from 'react';
import Button from '../commons/Button';

type DoctorCardTypes = {
    id: string | number;
    name: string;
    specialty_name: string;
    photo: string;
    onOpen: (React.MouseEventHandler<HTMLButtonElement>);
}

const DoctorCard = ({ id, name, specialty_name, photo, onOpen }: DoctorCardTypes) => {

    return (
        <div className="col-lg-4">
            <div className="card dmx-auto">
                <img src={photo} className="card-img-top" alt="doctor" />
                <div className="card-body">
                    <i className="las la-stethoscope la-2x text-primary pb-2"></i>
                    <h4 className="card-title text-primary">{name}</h4>
                    <h5 className="card-text"><i className="las la-book-medical"></i> Especialidad: {specialty_name}</h5>
                    <hr />
                    <Button id={id} desc="" label="Ver más detalle" buttonOnClick={onOpen} />
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;