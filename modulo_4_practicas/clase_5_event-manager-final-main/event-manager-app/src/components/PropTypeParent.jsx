import PropTypeExample from "./PropTypeExample";

function PropTypeParent() {
  return (
    <div>
      <h2>Ejemplo de PropTypes</h2>
      <PropTypeExample title="Título válido" count={10} />
      <PropTypeExample title="Solo título" />
      {/* <PropTypeExample count={20} />  Esto lanzará una advertencia en la consola */}
    </div>
  );
}

export default PropTypeParent;
