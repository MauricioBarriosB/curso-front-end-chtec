import { useAuth } from "../context/AuthContext";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import DOMPurify from "dompurify";

function Appointments() {
    const {user} = useAuth();
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [doctor, setDoctor] = useState("");
    const [desc, setDesc] = useState("");


    // ** Submit new doctor data :

    const handleSubmit = (e) => {
        e.preventDefault();
        let snEmail = DOMPurify.sanitize(email);
        let snDate = DOMPurify.sanitize(date);
        let snSpecialty = DOMPurify.sanitize(specialty);
        let snDoctor = DOMPurify.sanitize(doctor);
        let snDesc = DOMPurify.sanitize(desc);
        
        alert(user.name + ', su solicitud será procesada a la brevedad.');
    };

    return (
        <MainLayout>
            <div className="container marketing">
                <div className="row text-center">
                    <h2 className="text-primary pt-4">Cita Médica</h2>
                    <h4 className="pt-4 pb-4">
                        Recuerda anticipar tu hora de atenención.
                    </h4>
                </div>

                <div className="card-body d-flex justify-content-center">
                    <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
                        <h4 className="text-primary py-2"> <strong>{user.name}</strong>  solicita día de antención en el siguiente formulario:</h4>

                        <div className="row">

                            <div className="col-md-6">
                                <input
                                    type="email"
                                    placeholder="Ingresar email"
                                    className="form-control my-4"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Ingresa doctor"
                                    className="form-control my-4"
                                    value={doctor}
                                    onChange={(e) => setDoctor(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    placeholder="Ingresar fecha"
                                    className="form-control my-4"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Ingresar especialidad"
                                    className="form-control my-4"
                                    value={specialty}
                                    onChange={(e) => setSpecialty(e.target.value)}
                                    required
                                />
                            </div>

                        </div>

                        <textarea
                            placeholder="Ingresar detalles de la dolencia"
                            className="form-control"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            required
                        ></textarea>
                        <div className="py-4 text-center">
                            <input
                                type="submit"
                                className="btn btn-primary"
                                value="Reservar Hora"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}

export default Appointments;