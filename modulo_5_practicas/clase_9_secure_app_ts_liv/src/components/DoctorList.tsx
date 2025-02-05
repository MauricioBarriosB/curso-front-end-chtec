import React, { useEffect, useRef, useState } from 'react';
import DoctorCard from './DoctorCard';
import ModalPortal from "../commons/ModalPortal";
import CustomSelect from "../commons/CustomSelect";
import { getAllDoctors} from "../services/DocsApi.js";

//, getDoctorsByIdSpeciality 

type Option = {
    value: string | number;
    label: string;
}

type id = string | number;

interface DoctorListDataProps {
    id: id;
    fname: string;
    lname: string;
    specialty_name: string;
    biography: string;
    photo: string;
}

interface SpecialtiesProps {
    id: id;
    name: string;
}

const DoctorList:React.FC = () => {

    // ** Doctors fetch data Hooks :
    const [data, setData] = useState<DoctorListDataProps[]>([]);
    const [error, setError] = useState<string | null>(null);

    // ** Doctors Modals Hooks :
    const [userData, setUserData] = useState<DoctorListDataProps[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    // ** Specialties Selections Hooks :
    const specialties = useRef<(SpecialtiesProps | null)[]>([]);
    // const [selectedItem, setSelectedItem] = useState<Option | null>(null);

    useEffect(() => {

        // * Fetch Data from Productive API REST -> JWT Validation :
        const fetchDoctors = async () => {
            let data:any = getAllDoctors('jwt');
            try {
                data = await data;
            } catch (error) {
                setError('Error en la carga de datos!');
                return;
            }

            // ** Process Specialties from Doctor Data (avoid multiples API Request)
            // ** let variable:Array<{id:number, name:string}> = []; => TS Array of Objects Definition

            let jspec:SpecialtiesProps[] = []; 
            for (let i in data) jspec.push({id:data[i].specialty_id, name:data[i].specialty_name});
            specialties.current=jspec.filter((value,index,array)=>index==array.findIndex(item=>item.id==value.id));
            setData(data);
        };
        fetchDoctors();
    }, []);

    const handleClose = () => {
        setOpen(false);
        console.log('* Close ModalPortal!');
    };

    const handleOpen = (event:React.SyntheticEvent<HTMLButtonElement>) => {
        const filterDoc = data.filter(x=>x.id==event.currentTarget.dataset.id);
        setUserData(filterDoc);
        setOpen(true);
        console.log('* Open ModalPortal!');
    };

    const handleSelect = (event:React.SyntheticEvent<HTMLSelectElement>) => {
        console.log(event.currentTarget.value);
        //setUserData(filterDoc);
        //setOpen(true);
    };

    const options: Option[] = [
        {
          label: "Audi",
          value: "audi"
        },
        {
          label: "Ferrari",
          value: "ferrari"
        },
        {
          label: "Mercedes Benz",
          value: "mercedes"
        },
        {
          label: "BMW",
          value: "bmw"
        },
        {
          label: "Tesla",
          value: "tesla"
        },
      ];


    if (error) return <p>{error}</p>;

    return (
        <>
            <div>
                <div className="container marketing">
                    <h4 className="text-center py-2">Carga de Datos de Doctores mediante API Externa | Componentes TS: DoctorCard.tsx y Button.tsx</h4>

                    <CustomSelect
                        placeholder='Filtrar por especialidad'
                        options={options}
                        onSelect={handleSelect}
                    />

                    <div className="row doctors pt-4">
                        {data.map((item) => (
                            <DoctorCard key={item.id} id={item.id} fname={item.fname} lname={item.lname} specialty_name={item.specialty_name} biography={item.biography} photo={item.photo} onOpen={handleOpen} />
                        ))}
                    </div>
                    
                </div>
            </div>

            {open && (
                <ModalPortal fname={userData[0].fname} lname={userData[0].lname} onClose={handleClose} ></ModalPortal>
            )}

        </>
    );
};

export default DoctorList;