import { useState, useEffect } from "react";
import DoctorsList from "@components/DoctorsList";

function MedicalTeamView() {
  const [doctors, setDoctors] = useState([]);

  // * Get From DB API Fetch simulation :

  const getDoctors = () => {
    fetch("./json/doctors.json", {
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
        setDoctors(myJson);
      });
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div className="container marketing">
      <div className="row text-center">
        <h2 className="text-primary">Bienvenidos a Liv Hospital</h2>
        <h4 className="pt-4 pb-4">
          A continuación presentamos nuestros principales servicios
          hospitalarios.
        </h4>
      </div>

      <DoctorsList doctors={doctors} />
    </div>
  );
}
export default MedicalTeamView;
