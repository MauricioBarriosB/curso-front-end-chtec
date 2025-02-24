import { useAuth } from "../context/AuthContext";
import { useState, useEffect, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import AppointmentsList from "../components/AppointmentsList"
import useForm from "../hooks/useForm";

// ** API REST -> CRUD Methods :

import {
    createAppointment,
    getAppointments,
    getAppointmentsByUserId,
    editAppointment,
    updateAppointment,
    patchAppointment,
    deleteAppointment
} from '../services/DocsApi';

interface IFormData {
    email: string;
    doctor: string;
    date: string;
    specialty: string;
    desc: string;
}

interface IAppointments extends IFormData {
    id: number;
    name: string;
    status: string;
}

function Appointments() {
    const { userData } = useAuth();
    const [formMsgError, setFormMsgError] = useState<string | null>(null);
    const [formMsgSucce, setFormMsgSucce] = useState<string | null>(null);
    const flagIDUpdate = useRef<number | null>(null);

    const [appointments, setAppointments] = useState<IAppointments[]>([]);
    const [appoMsg, setAppoMsg] = useState<string | null>('Cargando...');

    //** useForm Hook to validate forms data :

    const useFormCallBack = (flagSubmit: boolean) => {
        if (!flagSubmit) {
            setFormMsgError('Campos inválidos, debes ingresar como mímimo 4 caractéres!');
            setFormMsgSucce(null);
        } else {
            (flagIDUpdate.current) ? methodUpdate() : methodCreate();
        }
    };

    let initialValue: IFormData = { email: '', doctor: '', date: '', specialty: '', desc: '' };

    const { form, handleChange, handleSubmit, updateForm, resetForm } = useForm(initialValue, useFormCallBack);
    const { email, doctor, date, specialty, desc }: { email?: '', doctor?: '', date?: '', specialty?: '', desc?: '' } = form;

    const fetchAppointments = async () => {
        const data = (userData.roles === 'admin') ? await getAppointments() : await getAppointmentsByUserId(userData.id);
        if (!data.error) {
            setAppointments(data);
            (data.length == 0) ? setAppoMsg('Aun no tienes citas creadas.') : setAppoMsg(null);
        } else {
            setAppoMsg(data.messages.error);
        }
    };

    // ** API REST -> CRUD Methods :

    const methodCreate = async () => {
        const data = await createAppointment(form, userData.jwt);
        if (!data.error) {
            setFormMsgError(null);
            setFormMsgSucce(data);
            resetForm();
            fetchAppointments();
        } else {
            setFormMsgError(data.messages.error);
        }
    };

    const methodDelete = async (id:number) => {
        const data = await deleteAppointment(id, userData.jwt);
        if (!data.error) {
            fetchAppointments();
            setFormMsgSucce(data);
        } else {
            setAppoMsg(data.messages.error);
        }
    };

    const methodEdit = async (id:number) => {
        const data = await editAppointment(id, userData.jwt);
        if (!data.error) {
            flagIDUpdate.current = id;
            updateForm(data);
        } else {
            setAppoMsg(data.messages.error);
        }
    };

    const methodUpdate = async () => {
        const data = await updateAppointment(flagIDUpdate.current, form, userData.jwt);
        // console.log(data);
        if (!data.error) {
            setFormMsgSucce(data);
            resetForm();
            fetchAppointments();
            flagIDUpdate.current = null;
        } else {
            setFormMsgError(data.messages.error);
        }
    };

    const methodPatch = async (id:number, status:string) => {
        let params:object = { "status": (status == 'Pendiente') ? 'Activo' : 'Pendiente' };
        const data = await patchAppointment(id, params, userData.jwt);
        if (!data.error) {
            fetchAppointments();
            setFormMsgSucce(data);
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
                    <h2 className="text-primary py-4">Cita Médica</h2>
                </div>
                <div className="card">
                    <div className="card-header text-center">
                        <h5 className="text-primary pt-2"> <strong>{userData.name}</strong> solicita día de antención en el siguiente formulario</h5>
                    </div>

                    <div className="card-body row justify-content-center">
                        <form onSubmit={handleSubmit} style={{ maxWidth: "700px" }}>

                            <div className="row text-center">
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

                            <div className="pt-4 pb-2 text-center">
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    value="Guardar y enviar Reserva &raquo;"
                                />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="text-center">
                    {formMsgError && <p className="text-danger my-3" style={{ marginBottom: "0" }}>  {formMsgError} </p>}
                    {formMsgSucce && <p className="text-success my-3" style={{ marginBottom: "0" }}> {formMsgSucce} </p>}
                </div>

                <AppointmentsList
                    appoMsg={appoMsg}
                    appointments={appointments}
                    roles={userData.roles}
                    methodDelete={methodDelete}
                    methodEdit={methodEdit}
                    methodPatch={methodPatch} 
                />
            </div>
        </MainLayout>
    );
}

export default Appointments;