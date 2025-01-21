import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import {DoctorClass} from './../class/DoctorClass';

interface DoctorList {
    id: number;
    fname: string;
    lname: string;
    specialty_name: string;
    biography: string;
    photo: string;
}

const DoctorList: React.FC = () => {
    const [data, setData] = useState<DoctorList[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [classdoc, setClassdoc] = useState<string>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://capacitaenlinea.cl/demodoctorapi/index.php/doctors?key=mab25');
                const result = await response.json();
                setData(result);

                const doctor = new DoctorClass('Josefina Duarte', 'Medicina General', 'Descripción biográfica');
                setClassdoc(doctor.showDoctorInfo());

            } catch (err) {
                console.log(err);
                setError('Error API Doctors');
            }
        };
        fetchData();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div>
            <div className="container marketing">
                <h5 className="text-center"> Datos desde Clase TypeScript DoctorClass.ts: </h5>
                <h5 className="text-center text-primary">{classdoc}</h5>
                <hr className="mt-4"/>
                <h4 className="text-center py-2">Carga de Datos de Doctores mediante API Externa</h4>
                <div className="row doctors pt-4">
                    {data.map((item) => (
                        <DoctorCard key={item.id} fname={item.fname} lname={item.lname} specialty_name={item.specialty_name} biography={item.biography} photo={item.photo} />
                    ))}
                </div> 
            </div>
        </div>
    );
};

export default DoctorList;