import React, { useEffect, useState } from "react";
import Button from "@commons/Button";
import ModalSpecialties from "@commons/ModalSpecialties";
import livLogo from "@assets/logo.svg";

function HomeView() {
  const [specialties, setSpecialties] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemData, setItemData] = useState({ name: "", desc: "" });

  // * Get From DB API Fetch simulation :

  const getSpecialties = () => {
    fetch("./json/specialties.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setSpecialties(myJson);
      });
  };

  // * Portal modal functions :

  const handleClose = () => {
    setOpen(false);
    console.log("* Close ModalSpecialties");
  };

  const handleOpen = (e) => {
    setItemData({
      name: e.target.dataset.label,
      desc: e.target.dataset.desc,
    });
    setOpen(true);
    console.log("* Open ModalSpecialties");
  };

  useEffect(() => {
    getSpecialties();
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
            Listado con nuestras especialidades médicas disponibles
          </h5>
        </div>
        <div className="card-body">
          {specialties.map((property) => (
            <React.Fragment key={property.id}>
              <Button
                label={property.name}
                onClick={handleOpen}
                desc={property.description}
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
        <ModalSpecialties
          onClose={handleClose}
          itemData={itemData}
        ></ModalSpecialties>
      )}
    </div>
  );
}

export default HomeView;
