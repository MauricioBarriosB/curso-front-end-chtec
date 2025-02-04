import { useAuth } from "../context/AuthContext";
import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getAllPatients } from "../services/DocsApi";
import DOMPurify from "dompurify";

const Patients = () => {
    const { user, jwt } = useAuth();
    const [patients, setPatients] = useState([]);
    const [query, setQuery] = useState("");
    const [error, setError] = useState(null);

    const fetchPatients = async () => {
        try {
            const dataApi = await getAllPatients(jwt);
            setPatients(dataApi);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPatients();
    }, []);

    const handleSearch = async (e) => {
        setError(null);
        try {
            const dataApi = await getAllPatients(jwt);
            const filPatients = dataApi.filter((fpat) =>
                fpat.fname.toLowerCase().includes(DOMPurify.sanitize(query).toLowerCase()) ||
                fpat.lname.toLowerCase().includes(DOMPurify.sanitize(query).toLowerCase())
            );
            setPatients(filPatients);
            if (filPatients.length === 0) {
                setError("El nombre de paciente no existe.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MainLayout>
            <div className="container marketing">

                <div className="row text-center">
                    <h2 className="text-primary pt-4">Registro de Pacientes</h2>
                    <h4 className="pt-4 pb-3">
                        Según su perfil de <strong>{user.roles}</strong>, tiene acceso a la información y registro de pacientes.<br />
                    </h4>

                    <form onSubmit={handleSearch}>
                        <label htmlFor="search">
                            <input
                                type="text"
                                className="form-control"
                                style={{ paddingBottom:"10px"}} 
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Nombre o apellido"
                            />
                        </label> 
                        <button type="submit" className="btn btn-primary btn-sm" style={{ height: "40px", paddingTop:"8px"}} >  Buscar Paciente </button>
                    </form>
                </div>

                <div className="card text-center mb-5 mt-4">
                    <div className="card-header">
                        <h5 className="mt-1">
                            Listado con pacientes activos en plataforma
                        </h5>
                    </div>
                    <div className="card-body">
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <ul>
                            {patients.map((patient) => (
                                <p key={patient.id}>
                                    RUT: {patient.rut} | Nombre: {patient.fname} {patient.lname} | Edad:  {patient.age} | Especialidad: {patient.specialty_name}
                                    <br /> Diagnóstico: {patient.diagnosis}  por <strong>{patient.doctor_name}  </strong>
                                </p>
                            ))}
                        </ul>
                    </div>
                    <div className="card-footer text-body-secondary">
                        <p className="fw-bold text-primary m-0">
                            Posteriomente tendrá accesos a editar lista de pacientes.
                        </p>
                    </div>
                </div>

            </div>
        </MainLayout>
    );
};

export default Patients;