import { useAuth } from "../context/AuthContext";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import useForm from "../hooks/UseForm";

function Appointments() {
    const { user } = useAuth();
    const { values, isValid, handleChange, handleSubmit, resetForm } = useForm(submitFormValues);
    const [error, setError] = useState('');


    function submitFormValues() {
        if (isValid.current) {
            alert(user.name + ', su solicitud será procesada a la brevedad.');
            console.log(values);
            resetForm();
            setError('');
        } else {
            setError('Campos inválidos, debes ingresar como mímimo 4 caractéres');
        }
    }

    return (
        <MainLayout>
            <div className="container marketing">
                <div className="row text-center">
                    <h2 className="text-primary pt-4">Cita Médica</h2>
                    <h4 className="pt-4 pb-2">
                        Recuerda anticipar tu hora de atenención.
                    </h4>
                </div>

                <div className="card-body d-flex justify-content-center">
                    <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
                        <h4 className="text-primary pt-2"> <strong>{user.name}</strong>  solicita día de antención en el siguiente formulario:</h4>

                        {error && <p className="text-danger text-center">{error}</p>}

                        <div className="row">

                            <div className="col-md-6">
                                <input
                                    type="email"
                                    placeholder="Ingresar email"
                                    className="form-control my-4"
                                    name="email"
                                    value={values.email || ''}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Ingresa doctor"
                                    className="form-control my-4"
                                    name="doctor"
                                    value={values.doctor || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    placeholder="Ingresar fecha"
                                    className="form-control my-4"
                                    name="date"
                                    value={values.date || ''}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Ingresar especialidad"
                                    className="form-control my-4"
                                    name="specialty"
                                    value={values.specialty || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <textarea
                            placeholder="Ingresar detalles de la dolencia"
                            className="form-control"
                            name="desc"
                            value={values.desc || ''}
                            onChange={handleChange}
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