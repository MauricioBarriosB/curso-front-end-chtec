
import Dexie, { type EntityTable } from 'dexie';

interface ISpecialties {
    id: number;
    name: string;
    description:string;
}

interface IDoctorList {
    id: string | number;
    specialty_id : number;
    fname: string;
    lname: string;
    specialty_name: string;
    biography: string;
    photo: string;
}

interface IPatients {
    id: string | number;
    rut: string;
    fname: string;
    lname: string;
    age: string;
    specialty_name: string;
    diagnosis: string;
    doctor_name: string
}

interface IAppointments  {
    id: number;
    name: string;
    status: string;
    email: string;
    doctor: string;
    date: string;
    specialty: string;
    desc: string;
}

// ** Primary key "id" (for the typings only):

const DbLocal = new Dexie('DbLocal') as Dexie & {
    specialties:  EntityTable<ISpecialties, 'id'>
    doctorlist:   EntityTable<IDoctorList,  'id'>
    patients:     EntityTable<IPatients,    'id'>
    appointments: EntityTable<IAppointments,'id'>
};

// ** Schema declaration (Set ++id for auto increment index):

DbLocal.version(1).stores({
    specialties:  'id, name, description',
    doctorlist:   '++id, specialty_id, fname, lname, specialty_name, biography, photo',
    patients:     'id, rut, fname, lname, age, specialty_name, diagnosis, doctor_name',
    appointments: 'id, name, status, email, doctor, date, specialty, desc',
});

export type { ISpecialties, IDoctorList, IPatients, IAppointments };
export { DbLocal };