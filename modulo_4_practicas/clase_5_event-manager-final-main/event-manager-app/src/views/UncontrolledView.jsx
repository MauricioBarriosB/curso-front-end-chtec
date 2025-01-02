import UncontrolledForm from "../components/UncontrolledForm";

function UncontrolledView() {
  return (
    <div>
      <h1>Componentes No Controlados</h1>
      <p>
        Este ejemplo muestra cómo manejar datos de formularios directamente
        desde el DOM usando referencias (`ref`).
      </p>
      <UncontrolledForm />
    </div>
  );
}

export default UncontrolledView;
