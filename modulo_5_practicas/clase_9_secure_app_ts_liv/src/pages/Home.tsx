import { useAuth } from "../context/AuthContext";
import React, { useEffect, useState } from "react";
import Button from "../commons/Button";
import SpecialtiesModal from "../components/SpecialtiesModal"
import livLogo from "../assets/logo.svg";
import MainLayout from "../layouts/MainLayout";
import { getAllSpecialties } from "../services/DocsApi";

interface ISpecialties {
    id: string | number;
    name: string;
    description: string;
}

interface IitemData {
    name: string | undefined;
    desc: string | undefined;
}

const Home = () => {
    const { userData } = useAuth();
    const [specialties, setSpecialties] = useState<ISpecialties[]>([]);
    const [itemData, setItemData] = useState<IitemData>({ name: '', desc: '' });
    const [open, setOpen] = useState<boolean>(false);

    const fetchSpecialties = async () => {
        const data = await getAllSpecialties();
        if (!data.error) {
            setSpecialties(data);
        } else {
            console.log(data.messages.error);
        }
    };

    // * Portal modal functions :

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (event: React.SyntheticEvent<HTMLButtonElement>) => {
        let tempItem: IitemData = {
            name: event.currentTarget.dataset.label,
            desc: event.currentTarget.dataset.desc
        }
        setItemData(tempItem);
        setOpen(true);
    };

    useEffect(() => {
        fetchSpecialties();
    }, []);

    return (
        <MainLayout>
            <div className="container marketing">
                <div className="text-center py-4">
                    <img src={livLogo} alt="Vite logo" width="120px" />
                </div>

                <div className="row text-center">
                    <h2 className="text-primary">Bienvenido a Liv Hospital</h2>
                    <h4 className="pt-3 pb-4">

                        Estás autenticado como <strong>{userData.name}</strong> con perfil <strong>{userData.roles}</strong>.<br />

                        A continuación presentamos nuestros principales servicios
                        hospitalarios.
                    </h4>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card p-2">
                            <i className="las la-ambulance la-4x text-primary mb-2"></i>
                            <h3 className="fw-normal text-primary">Servicio de Traslado</h3>
                            <p>Atención inmediata para emergencias, disponible 24/7.</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card p-2">
                            <i className="las la-stethoscope la-4x text-primary mb-2"></i>
                            <h3 className="fw-normal text-primary">Consulta Médica General</h3>
                            <p>
                                Atención personalizada y diagnóstico integral para el cuidado de
                                tu salud.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card p-2">
                            <i className="las la-procedures la-4x text-primary mb-2"></i>
                            <h3 className="fw-normal text-primary">Atención Hospitalaria</h3>
                            <p>
                                Cirugías con tecnología avanzada y un equipo de especialistas de
                                primer nivel.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card text-center mb-5">
                    <div className="card-header">
                        <h5 className="mt-1">
                            Listado con nuestras especialidades médicas disponibles
                        </h5>
                    </div>
                    <div className="card-body">

                        {specialties.map((item) => (
                            <React.Fragment key={item.id}>
                                <Button
                                    id={item.id}
                                    label={item.name}
                                    desc={item.description}
                                    buttonOnClick={handleOpen}
                                />
                            </React.Fragment>
                        ))}

                    </div>
                    <div className="card-footer text-body-secondary">
                        <p className="fw-bold text-primary m-0">
                            Presione cada botón para obtener mayor información acerca de
                            nuestras especialidades
                        </p>
                    </div>
                </div>

                {open && (
                    <SpecialtiesModal
                        name={itemData.name}
                        desc={itemData.desc}
                        onClose={handleClose}
                    ></SpecialtiesModal>
                )}

            </div>
        </MainLayout>
    );
};

export default Home;