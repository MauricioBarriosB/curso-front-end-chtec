import React from 'react';
import Button from './Button';

type id = string | number;

interface DoctorCardProps {
    id: id;
    fname: string;
    lname: string;
    specialty_name: string;
    biography: string;
    photo: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ id, fname, lname, specialty_name, biography, photo }) => {

    const handleClick = (e:React.SyntheticEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.dataset.desc);
    };

    return (
        <div className="col-lg-4">
            <div className="card dmx-auto">
                <img src={photo} className="card-img-top" alt="doctor" />
                <div className="card-body">
                    <i className="las la-stethoscope la-3x text-primary pb-2"></i>
                    <h4 className="card-title text-primary">{fname} {lname}</h4>
                    <h5 className="card-text"><i className="las la-book-medical"></i> Especialidad: {specialty_name}</h5>
                    <hr />
                    <p className="text-primary">• Biografía: {biography}</p>
                    <Button desc={`Descripción ID # ${id}: ${fname} ${lname}: ${biography}`} label="Ver más detalle" buttonOnClick={handleClick} />
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;