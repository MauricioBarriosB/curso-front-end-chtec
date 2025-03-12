import React, { useEffect, useRef, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import DoctorModal from "../components/DoctorModal";
import CustomSelect from "../commons/CustomSelect";
import MainLayout from "../layouts/MainLayout";
import { getAllSpecialties, getAllDoctors, getDoctorsByIdSpeciality } from "../services/DocsApi";
import { DbLocal, ISpecialties, IDoctorList } from "../services/DbLocal";

const MedicalTeamLocal = () => {

    // ** Doctors fetch data Hooks :
    const [data, setData] = useState<IDoctorList[]>([]);
    const [error, setError] = useState<string | null>(null);

    // ** Doctors Modals Hooks :
    // const userData = useRef<IDoctorList>();
    const [userData, setUserData] = useState<IDoctorList[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    // ** Specialties Selections Hooks no reactive :
    const specialties = useRef<(ISpecialties)[]>([]);

    useEffect(() => {

        // ** Fetch Data from API REST -> JWT DOC Validation :
        // ** Sync And Update the DbLocal doctorlist table if user is online :

        const fetchDoctorsOnline = async () => {
            const speci = await getAllSpecialties();
            if (!speci.error) {
                specialties.current = speci;
                await DbLocal.specialties.bulkPut(speci);
            } else {
                setError(speci.messages.error);
                return;
            }

            const docs = await getAllDoctors('jwt');
            if (!docs.error) {
                for (let i = 0; i < docs.length; i++) {
                    delete docs[i]['contact'];
                    delete docs[i]['hours'];
                    delete docs[i]['available'];
                    delete docs[i]['age'];
                    delete docs[i]['experience'];
                    delete docs[i]['rut'];
                }
                await DbLocal.doctorlist.bulkPut(docs);
                setData(docs);

            } else {
                setError(docs.messages.error);
                return;
            }
        };

        const fetchDoctorsLocal = async () => {
            specialties.current = await DbLocal.specialties.toArray();
            const docs = await DbLocal.doctorlist.toArray();
            setData(docs);
        };

        if (navigator.onLine) {
            fetchDoctorsOnline();
        } else {
            fetchDoctorsLocal();
        }
    }, []);

    const handleOpen = (event: React.SyntheticEvent<HTMLButtonElement>) => {
        let filterDoc = data.filter(x => x.id == event.currentTarget.dataset.id);
        setUserData(filterDoc);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let sid = Number(event.currentTarget.value);

        const fetchDoctorsOnline = async () => {
            const data = await getDoctorsByIdSpeciality(sid, 'jwt');
            if (!data.error) {
                setData(data);
            } else {
                setError(data.messages.error);
                return;
            }
        };

        const fetchDoctorsLocal = async () => {
            const docs = await DbLocal.doctorlist.where('specialty_id').equals(sid).toArray();
            setData(docs);
        };

        if (navigator.onLine) {
            fetchDoctorsOnline();
        } else {
            fetchDoctorsLocal();
        }
    };

    if (error) return <p>{error}</p>;

    return (
        <MainLayout>
            <div>
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
                </div>

                {open && (
                    <DoctorModal
                        name={`${userData[0].fname} ${userData[0].lname}`}
                        photo={userData[0].photo}
                        biography={userData[0].biography}
                        specialty_name={userData[0].specialty_name}
                        onClose={handleClose}>
                    </DoctorModal>
                )}

            </div>
        </MainLayout>
    );
};

export default MedicalTeamLocal;