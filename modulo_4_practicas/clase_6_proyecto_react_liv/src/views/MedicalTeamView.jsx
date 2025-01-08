import React, { useState, useEffect, useRef } from "react";
import DoctorsList from "@components/DoctorsList";
import CustomSelect from '@commons/CustomSelect';

function MedicalTeamView() {
    const doctors = useRef([]); // * No reactive!
    const specialties = useRef([]); // * No reactive!
    const [list, setList] = useState([]);


    // * Get From DB API Fetch simulation :

    useEffect(() => {
        const getDoctors = () => {
            const urls = ['./json/doctors.json', './json/specialties.json'];
            let jsonObjects = [];
            Promise.all(urls.map((url) => fetch(url).then((response) => response.json()))).then((jsons) => {
                jsons.forEach((json) => jsonObjects.push(json));
                let jdocs = jsonObjects[0];
                let jspec = jsonObjects[1];

                // ** Include specilaties on Doctor Object :

                for (let i in jspec) {
                    for (let j in jdocs) {
                        if (jspec[i].id == jdocs[j].specialty_id) jdocs[j]['specialty'] = jspec[i].name;
                    }
                }
                doctors.current = jdocs;
                specialties.current = jspec;
                setList(jdocs);
            }).catch((error) => console.error('* Fetch Json Error :', error));
        };
        getDoctors();
    }, []);

     // ** Select user input change :

    const handleSelectChange = (value) => {
        console.log('*** Selected value :', value);
        if (value) {
            let filtered = doctors.current.filter(a => a.specialty_id == value);
            setList(filtered);
        } else {
            setList(doctors.current);
        }
    };

    return (
        <div className="container marketing">
            <div className="row text-center">
                <h2 className="text-primary pt-4">Equipo Médico</h2>
                <h4 className="pt-4 pb-4">
                    A continuación presentamos a nuestro Equipo Médico.
                </h4>
                <CustomSelect initial={'Selecciona una especialidad médica'} options={specialties.current} onChange={handleSelectChange} />
            </div>
            <DoctorsList doctors={list} />
        </div>
    );
}

export default MedicalTeamView;