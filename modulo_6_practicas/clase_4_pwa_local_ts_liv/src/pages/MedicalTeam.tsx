import React, { useEffect, useRef, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import DoctorModal from "../components/DoctorModal";
import CustomSelect from "../commons/CustomSelect";
import MainLayout from "../layouts/MainLayout";
import { getAllDoctors, getDoctorsByIdSpeciality } from "../services/DocsApi";

type OptionTypes = {
    id: string | number;
    name: string;
}

interface IDoctorList {
    id: string | number;
    fname: string;
    lname: string;
    specialty_name: string;
    biography: string;
    photo: string
}

const initModal = { id: '', fname: '', lname: '', specialty_name: '', biography: '', photo: '' }

const DoctorList = () => {

    // ** Doctors fetch data Hooks :
    const [data, setData] = useState<IDoctorList[]>([]);
    const [error, setError] = useState<string | null>(null);

    // ** Doctors Modals Hooks :
    const test = useRef<IDoctorList>(initModal);
    const [open, setOpen] = useState<boolean>(false);

    // ** Specialties Selections Hooks no reactive :
    // ** const specialties = useRef<(Option | null)[]>([]); // Default Null
    const specialties = useRef<(OptionTypes)[]>([]);

    useEffect(() => {
        // * Fetch Data from API REST -> JWT Validation :
        const fetchDoctors = async () => {
            const data = await getAllDoctors('jwt');
            if (!data.error) {
                setData(data);
            } else {
                setError(data.messages.error);
                return;
            }

            // ** Process Specialties from result (avoid multiples API Request)
            // ** TS array of objects inline definition => let variable:Array<{id:number, name:string}> = [];

            let jspec: OptionTypes[] = [];
            for (let i in data) jspec.push({ id: data[i].specialty_id, name: data[i].specialty_name });
            specialties.current = jspec.filter((value, index, array) => index == array.findIndex(item => item.id == value.id));
        };
        fetchDoctors();
    }, []);

    const handleOpen = (event: React.SyntheticEvent<HTMLButtonElement>) => {
        let filterDoc = data.filter(x => x.id == event.currentTarget.dataset.id);
        test.current = filterDoc[0]; 
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let id: string = event.currentTarget.value;
        const fetchDoctors = async () => {
            const data = await getDoctorsByIdSpeciality(id, 'jwt');
            if (!data.error) {
                setData(data);
            } else {
                setError(data.messages.error);
                return;
            }
        };
        fetchDoctors();
    };

    if (error) return <p>{error}</p>;

    return (
        <MainLayout>
            <div>
                <div className="container marketing text-center">
                    <h2 className="text-primary pt-4">Equipo Médico</h2>
                    <h4 className="pt-4 pb-4">
                        A continuación presentamos a nuestro Equipo Médico.
                    </h4>
                    <CustomSelect
                        placeholder='Filtrar por especialidad'
                        options={specialties.current}
                        onSelect={handleSelect}
                    />

                    <div className="row doctors pt-4">
                        {data.map((item) => (
                            <DoctorCard
                                key={item.id}
                                id={item.id}
                                name={`${item.fname} ${item.lname}`}
                                specialty_name={item.specialty_name}
                                photo={item.photo}
                                onOpen={handleOpen}
                            />
                        ))}
                    </div>

                </div>

                {open && (
                    <DoctorModal
                        name={`${test.current.fname} ${test.current.lname}`}
                        photo={test.current.photo}
                        biography={test.current.biography}
                        specialty_name={test.current.specialty_name}
                        onClose={handleClose}>
                    </DoctorModal>
                )}

            </div>
        </MainLayout>
    );
};

export default DoctorList; 