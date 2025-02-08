import { useAuth } from "../context/AuthContext";
//import {useState} from "react";
import MainLayout from "../layouts/MainLayout";
import useForm from "../hooks/useForm";

interface IFormData {
    email: string;
    doctor: string;
    date: string;
    specialty: string;
    desc: string;
}

function Appointments() {
    const { userData } = useAuth();
    //const [error, setError] = useState<string | null>(null);

    //** useForm Hook to validate forms data :

    const useFormCallBack = (flagSubmit: boolean) => {
        if (!flagSubmit) {
            //setError('Campos inválidos, debes ingresar como mímimo 4 caractéres!');
        } else {
            submitValues();
        }
    };

    let initialValue: IFormData = { 
        email: '', 
        doctor: '',
        date:'',
        specialty:'',
        desc:''
    };

    const { form, handleChange, handleSubmit } = useForm(initialValue, useFormCallBack);
    const { email, doctor, date, specialty, desc }: { 
        email?: '', 
        doctor?: '' 
        date?: '' 
        specialty?: '' 
        desc?: ''} = form;

    //** Passing validation -> submit form :

    function submitValues() {

        console.log(userData.id, form);
        /*
        if (isValid.current) {
            alert(user.name + ', su solicitud será procesada a la brevedad.');
            console.log(values);
            resetForm();
            setError('');
        } else {
            setError('Campos inválidos, debes ingresar como mímimo 4 caractéres');
        }
        */

        /*
        const data = await userLogIn(form);
        if (!data.error) {
            login(data);
                navigate('/home');
        } else {
            setError(data.messages.error);
        }
            */
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
                        <h4 className="text-primary pt-2"> <strong>{userData.name}</strong>  solicita día de antención en el siguiente formulario:</h4>

                        <div className="row">

                            <div className="col-md-6">
                                <input
                                    type="email"
                                    placeholder="Ingresar email"
                                    className="form-control my-4"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Ingresa doctor"
                                    className="form-control my-4"
                                    name="doctor"
                                    value={doctor}
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
                                    value={date}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Ingresar especialidad"
                                    className="form-control my-4"
                                    name="specialty"
                                    value={specialty}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <textarea
                            placeholder="Ingresar detalles de la dolencia"
                            className="form-control"
                            name="desc"
                            value={desc}
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