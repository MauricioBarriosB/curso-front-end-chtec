import { useAuth } from "../context/AuthContext";
import React, { useState, useEffect, useRef } from "react";
import DoctorsList from "../components/DoctorsList";
import CustomSelect from '../commons/CustomSelect';
import MainLayout from "../layouts/MainLayout";
import { getAllDoctors, getDoctorsByIdSpeciality } from "../services/DocsApi";

const MedicalTeam = () => {
    const {jwt} = useAuth();
    const specialties = useRef([]); // * No reactive!
    const [list, setList] = useState([]);

    // * Get Data from API REST :

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const data = await getAllDoctors(jwt);
                console.log(data);
                let jspec = [];

                // * Set the specialies as unique ID object array :

                for (let i in data) {
                    jspec.push({
                        id: data[i].specialty_id,
                        name: data[i].specialty_name
                    });
                };

                const uniJspec = Array.from(new Set(jspec.map(a => a.id))).map(id => {
                    return jspec.find(a => a.id === id);
                });

                specialties.current = uniJspec;
                setList(data);
            } catch (error) {
                console.log('Error from API REST');
            }
        };
        fetchDoctors();
    }, []);

    // ** Select user input change Specialty :

    const handleSelectChange = (value) => {
        const fetchDoctors = async (value) => {
            try {
                const data = await getDoctorsByIdSpeciality(value, jwt);
                setList(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchDoctors(value);
    };

    return (
        <MainLayout>
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
        </MainLayout>
    );
};

export default MedicalTeam;