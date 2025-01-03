import React, { useEffect, useState } from "react";
import Button from "@commons/Button";
import ModalServices from "@commons/ModalServices";
import livLogo from "@assets/logo.svg";

function HomeView() {
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemData, setItemData] = useState({name:'', desc:''});

  const handleClose = () => {
    setOpen(false);
    console.log("* Close ModalServices");
  };

  const handleOpen = (e) => {
    setItemData({
      name: e.target.dataset.label,
      desc: e.target.dataset.desc,
    });
    setOpen(true);
    console.log("* Open ModalServices");
  };

  // * Fetch data - from DB simulation :

  useEffect(() => {
    setServices([
      { id: 1, name: "Medicina General", desc: 'Texto breve e informativo acerca del ámbito y uso del Servicio Medicina General.'},
      { id: 2, name: "Medicina Nuclear", desc: 'Texto breve e informativo acerca del ámbito y uso del Servicio Medicina Nuclear.'},
      { id: 3, name: "Neurología", desc: 'Texto breve e informativo acerca del ámbito y uso del Servicio Neurología.'},
      { id: 4, name: "Fonoaudiología", desc: 'Texto breve e informativo acerca del ámbito y uso del Servicio Fonoaudiología.'},
      { id: 5, name: "Cardiología", desc: 'Texto breve e informativo acerca del ámbito y uso del Servicio Cardiología.'},
      { id: 6, name: "Pediatría", desc: 'Texto breve e informativo acerca del ámbito y uso del Servicio Pediatría.'},
    ]);
  }, []);

  return (
    <div className="container marketing">
      <div className="text-center py-4">
        <img src={livLogo} alt="Vite logo" width="120px" />
      </div>

      <div className="row text-center">
        <h2 className="text-primary">Bienvenidos a Liv Hospital</h2>
        <h4 className="pt-4 pb-4">
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
            Listado con nuestras esecialidades médicas disponibles
          </h5>
        </div>
        <div className="card-body">
          {services.map((property) => (
            <React.Fragment key={property.id}>
              <Button
                label={property.name}
                onClick={handleOpen}
                desc={property.desc}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="card-footer text-body-secondary">
          <p className="fw-bold text-primary m-0">
            Presione cada botón para obtener mayor información acerca de nuestras especialidades
          </p>
        </div>
      </div>

      {open && (
        <ModalServices
          onClose={handleClose}
          itemData={itemData}
        ></ModalServices>
      )}
    </div>
  );
}
export default HomeView;
