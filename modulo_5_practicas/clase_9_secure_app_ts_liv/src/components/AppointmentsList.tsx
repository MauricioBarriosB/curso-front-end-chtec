interface IAppointments {
    id: number;
    name: string;
    email: string;
    date: string;
    doctor: string;
    desc: string;
    status: string;
}

type AppointmentsTypes = {
    appoMsg: string | null;
    appointments: IAppointments[];
    roles: string | null;
    methodDelete(id: number): void,
    methodEdit(id: number): void,
    methodPatch(id: number, status: string): void,
};

const formatDate = (date: string) => {
    return date.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1');
}

const AppointmentsList = ({ appoMsg, appointments, roles, methodDelete, methodEdit, methodPatch }: AppointmentsTypes) => {
    return (
        <div className="card text-center mb-5 mt-4">
            <div className="card-header">
                <h5 className="mt-1"> Listado reservas solicitadas (Mantenedor CRUD) </h5>
            </div>
            <div className="card-body text-center">
                {appoMsg && <p className="text-primary" style={{ marginBottom: "0" }}>{appoMsg}</p>}
                <ul className="list-group">
                    {appointments.map((row) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={row.id}>
                            <span> <strong> {row.name} </strong> | {row.email} | {formatDate(row.date)} | Doctor: {row.doctor} | Descripción: {row.desc} |
                                <strong className={'px-1 ' + (row.status == 'Pendiente' ? 'text-danger' : 'text-success')}>{row.status}</strong></span>
                            <span>

                                {(roles == 'admin') && (
                                    (row.status == 'Pendiente')
                                        ? <button className="btn btn-danger btn-sm my-1"    onClick={() => methodPatch(row.id, row.status)}><i className="las la-toggle-off"></i></button>
                                        : <button className="btn btn-secondary btn-sm my-1" onClick={() => methodPatch(row.id, row.status)}><i className="las la-toggle-on"></i></button>
                                )}

                                <button disabled={(roles != 'admin' && row.status != 'Pendiente') ? true : false}
                                    className="btn btn-dark btn-sm my-1 mx-2" onClick={() => methodEdit(row.id)}><i className="las la-pen"></i></button>

                                <button disabled={(roles != 'admin' && row.status != 'Pendiente') ? true : false}
                                    className="btn btn-danger btn-sm" onClick={() => methodDelete(row.id)}><i className="las la-trash"></i></button>

                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AppointmentsList;