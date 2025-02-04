import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import {DoctorClass} from '../classes/DoctorClass';
import {showDoctorData} from '../functions/DoctorFunctions';

type id = string | number;

interface DoctorListDataProps {
    id: id;
    fname: string;
    lname: string;
    specialty_name: string;
    biography: string;
    photo: string;
}

const DoctorList: React.FC = () => {
    const [data, setData] = useState<DoctorListDataProps[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [classdoc, setClassdoc] = useState<string>();
    const [functdoc, setFunctdoc] = useState<string>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://capacitaenlinea.cl/demodoctorapi/index.php/doctors?key=mab25');
                const result = await response.json();
                setData(result);

                const doctor = new DoctorClass('Josefina Duarte', 'Medicina General', 'Descripción biográfica');
                console.log(doctor.showDoctorInfo());
                setClassdoc(doctor.showDoctorInfo());

                const doctorFunc = showDoctorData('María Gómez', 'Cardiología', 'Descripción biográfica');
                console.log(doctorFunc);
                setFunctdoc(doctorFunc);

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
                <hr className="mt-4"/>
                
                <h5 className="text-center"> Datos desde Clase TS DoctorClass.ts: </h5>
                <h5 className="text-center text-primary">{classdoc}</h5>

                <h5 className="text-center pt-4"> Datos desde Función TS showDoctorData: </h5>
                <h5 className="text-center text-primary">{functdoc}</h5>

                <hr className="mt-4"/>

                <h4 className="text-center py-2">Carga de Datos de Doctores mediante API Externa | Componentes TS: DoctorCard.tsx y Button.tsx</h4>
                <div className="row doctors pt-4">
                    {data.map((item) => (
                        <DoctorCard key={item.id} id={item.id}  fname={item.fname} lname={item.lname} specialty_name={item.specialty_name} biography={item.biography} photo={item.photo} />
                    ))}
                </div> 
            </div>
        </div>
    );
};

export default DoctorList;