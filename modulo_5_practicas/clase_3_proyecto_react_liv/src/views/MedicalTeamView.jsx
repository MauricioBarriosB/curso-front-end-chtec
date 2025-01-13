import React, { useState, useEffect, useRef } from "react";
import DoctorsList from "@components/DoctorsList";
import CustomSelect from '@commons/CustomSelect';
import { findAll, findByIdSpeciality, create } from '@services/DocsApi';

function MedicalTeamView() {
    const specialties = useRef([]); // * No reactive!
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);

    const [newName, setNewName] = useState("");
    const [newSpecialty, setNewSpecialty] = useState("");
    const [newBio, setNewBio] = useState("");

    // * Get Data from public API :

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const data = await findAll();
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
                if ('code_error' in data[0]) setError(data[0].code_error);

            } catch (error) {
                setError(error);
                console.log("Error:", error);
            }
        };
        fetchDoctors();
    }, []);

    // ** Select user input change Specialty :

    const handleSelectChange = (value) => {
        console.log('*** Selected value to API Call :', value);
        const fetchDoctors = async (value) => {
            try {
                const data = await findByIdSpeciality(value);
                setList(data);
                if ('code_error' in data[0]) setError(data[0].code_error);
            } catch (error) {
                setError(error);
                console.log("Error:", error);
            }
        };
        fetchDoctors(value);
    };

    // ** Submit new doctor data :

    const handleSubmit = (e) => {
        e.preventDefault();
        const createOne = async () => {
            try {
                const response = await create(newName, newSpecialty, newBio);
                setNewName("");
                setNewSpecialty("");
                setNewBio("");
                alert(JSON.stringify(response));

            } catch (error) {
                console.log(error);
            }
        };
        createOne();
    };

    if (error) return <p>Error:{error}</p>;

    return (
        <div className="container marketing">
            <div className="row text-center">
                <h2 className="text-primary pt-4">Equipo Médico</h2>
                <h4 className="pt-4 pb-4">
                    A continuación presentamos a nuestro Equipo Médico.
                </h4>
                <CustomSelect initial={'Selecciona una especialidad médica'} options={specialties.current} onChange={handleSelectChange} />
            </div>
            <DoctorsList doctors={list} /> <hr />

            <div className="card-body d-flex justify-content-center">
                <form className="contact-form" onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
                    <h2 className="text-primary py-4">Publica datos de un nuevo doctor</h2>
                    <input
                        type="text"
                        placeholder="Ingresar nombre"
                        className="form-control my-4"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Ingresar especialidad"
                        className="form-control my-4"
                        value={newSpecialty}
                        onChange={(e) => setNewSpecialty(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Ingresar biografía"
                        className="form-control my-4"
                        value={newBio}
                        onChange={(e) => setNewBio(e.target.value)}
                        required
                    ></textarea>
                    <div className="py-4 text-center">
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Publicar Datos"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MedicalTeamView;