import React, { useEffect, useState } from "react";
import CustomSelect from '@commons/CustomSelect';
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/dist/style.css";


function AppointmentView() {
    const defaultClassNames = getDefaultClassNames();
    const [doctors, setDoctors] = useState([]);
    const [selected, setSelected] = useState();
    const [results, setResults] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        doctor: "",
        date: "",
    });

    // * Get From DB API Fetch simulation :

    useEffect(() => {
        const getDoctors = () => {
            const urls = ['./json/doctors.json', './json/specialties.json'];
            let jsonObjects = [];
            Promise.all(urls.map((url) => fetch(url).then((response) => response.json()))).then((jsons) => {
                jsons.forEach((json) => jsonObjects.push(json));
                let jdocs = jsonObjects[0];
                let jspec = jsonObjects[1];
                let totalData = [];
                let temp;

                // ** Include specilaties on Doctor Object :

                for (let i in jspec) {
                    for (let j in jdocs) {
                        if (jspec[i].id == jdocs[j].specialty_id) {
                            temp = { id: jdocs[i].id, name: `${jdocs[i].fname} ${jdocs[i].lname} | ${jspec[i].name}` };
                            totalData.push(temp);
                        }
                    }
                }
                setDoctors(totalData);
            }).catch((error) => console.error('* Fetch Json Error :', error));
        };
        getDoctors();
    }, []);

    // * Form Change $ Submit Events :

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (value) => {
        setSelected(value);
        let format = (value) ? value.toLocaleString('es-PY', { timeZone: 'UTC' }).split(',')[0] : '';
        setFormData({ ...formData, date: format });
    };

    const handleSelectChange = (value) => {
        if (value) {
            Object.keys(doctors).forEach((find) => {
                if (doctors[find].id == value) setFormData({ ...formData, doctor: doctors[find].name });
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.doctor || !formData.date) {
            setResults(false);
        } else {
            setResults(true);
        }
    };

    return (
        <div className="container marketing">
            <div className="row text-center">
                <h2 className="text-primary pt-4">Agenda tu Cita Médica</h2>
                <h4 className="pt-4 pb-4">
                    Puedes agendar tu Cita Médica en el siguiente formulario.
                </h4>

                <div className="card-body d-flex justify-content-center">
                    <form className="contact-form" onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
                        <div className="mb-3">
                            <input
                                autoFocus 
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Ingresar nombre"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Ingresar correo"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <CustomSelect initial={'Seleccionar doctor y especialidad'} options={doctors} onChange={handleSelectChange} />
                        <div className="my-3">
                            <DayPicker
                                classNames={{
                                    root: `${defaultClassNames.root} border p-3`,
                                    caption_label: `small`,
                                    day: `small`,
                                }}
                                locale={es}
                                mode="single"
                                onSelect={handleDateChange}
                                selected={selected}
                                footer={
                                    formData.date ? `Seleccionado: ${formData.date}` : "Elegir el día de atención."
                                }
                            />
                        </div>
                        <div className="pt-1 pb-2">
                            <input
                                type="submit"
                                className="btn btn-primary"
                                value="Enviar Formulario"
                            />
                        </div>
                    </form>
                </div>

                {results &&
                    <div className="card-body d-flex justify-content-center pt-4 pb-2">
                        <p className="text-primary"><strong>Cita Médica: {formData.name} | {formData.email} | {formData.doctor} | {formData.date} </strong></p>
                    </div>
                }

            </div>
        </div>
    );
}

export default AppointmentView;