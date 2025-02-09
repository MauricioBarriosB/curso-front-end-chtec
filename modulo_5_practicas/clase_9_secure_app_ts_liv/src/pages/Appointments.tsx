import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import useForm from "../hooks/useForm";
import { createAppointment, getAppointments, getAppointmentsByUserId} from '../services/DocsApi';

interface IFormData {
    email: string;
    doctor: string;
    date: string;
    specialty: string;
    desc: string;
}

interface IAppointments extends IFormData {
    id: number | null;
    name: string;
}

function Appointments() {
    const { userData } = useAuth();
    const [formMsgError, setFormMsgError] = useState<string | null>(null);
    const [formMsgSucce, setFormMsgSucce] = useState<string | null>(null);

    const [appointments, setAppointments] = useState<IAppointments[]>([]);
    const [appoMsg, setAppoMsg] = useState<string>('Cargando...');
    
    //** useForm Hook to validate forms data :

    const useFormCallBack = (flagSubmit: boolean) => {
        if (!flagSubmit) {
            setFormMsgError('Campos inválidos, debes ingresar como mímimo 4 caractéres!');
            setFormMsgSucce(null);
        } else {
            submitValues();
        }
    };

    let initialValue: IFormData = { email: '', doctor: '', date: '', specialty: '', desc: '' };

    const { form, handleChange, handleSubmit, resetForm } = useForm(initialValue, useFormCallBack);
    const { email, doctor, date, specialty, desc }: { email?: '', doctor?: '', date?: '', specialty?: '', desc?: '' } = form;

    //** Passing validation -> submit form :

    const submitValues = async () => {
        const data = await createAppointment(form, userData.jwt);
        if (!data.error) {
            setFormMsgError(null);
            setFormMsgSucce(data);
            resetForm();
            fetchAppointments();
        } else {
            setFormMsgError(data.messages.error);
        }
    }

    const fetchAppointments = async () => {
        const data = (userData.roles ==='admin') ? await getAppointments() : await getAppointmentsByUserId(userData.id); 
        if (!data.error) {
            setAppointments(data);
            setAppoMsg('Aun no tienes citas creadas.');
        } else {
            setAppoMsg(data.messages.error);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

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
                        <h4 className="text-primary pt-2 pb-3"> <strong>{userData.name}</strong> solicita día de antención en el siguiente formulario:</h4>

                        <div className="row text-center">
                            
                        {formMsgError && <p className="text-danger">  {formMsgError} </p>}
                        {formMsgSucce && <p className="text-success"> {formMsgSucce} </p>}

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
                                value="Reservar Día"
                            />
                        </div>
                    </form>
                </div>
                <div className="card text-center mb-5 mt-4">
                    <div className="card-header">
                        <h5 className="mt-1"> Lista estado reservas solicitadas </h5>
                    </div>
                    <div className="card-body text-center">
                        {appointments.length == 0 && <p className="text-primary">{appoMsg}</p>}
                        <ul>
                            {appointments.map((row) => (
                                <p key={row.id}>
                                    Nombre: <strong>{row.name}</strong> | Email: {row.email} | Doctor: {row.doctor} | Fecha: {row.date} | Especialidad:  {row.specialty} | Descripción: {row.desc}
                                </p>
                            ))}
                        </ul>
                    </div>
                    <div className="card-footer text-body-secondary">
                        <p className="fw-bold text-primary m-0">
                            La información de reservas ha sido actualizada con fecha {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Appointments;