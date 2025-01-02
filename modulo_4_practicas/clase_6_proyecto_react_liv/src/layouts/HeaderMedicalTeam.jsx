import livLogo from "@assets/logo.svg";

function HeaderMedicalTeam() {
  return (
    <>
      <div className="text-center pb-4">
        <img src={livLogo} alt="Vite logo" width="120px" />
      </div>

      <div className="row text-center">
        <h2 className="text-primary">Nuestro Equipo Médico</h2>
        <h4 className="pt-4 pb-4">
          Anticiapa tu Hora de Atención en LIV Hospital con nuestro equipo de expertos
        </h4>
      </div>
    </>
  );
}

export default HeaderMedicalTeam;
