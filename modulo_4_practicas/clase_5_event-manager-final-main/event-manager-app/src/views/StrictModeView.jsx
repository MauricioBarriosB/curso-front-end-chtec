import StrictModeExample from "../components/StrictModeExample";

function StrictModeView() {
  return (
    <div>
      <h1>Modo Estricto</h1>
      <p>
        Este ejemplo demuestra cómo `React.StrictMode` detecta problemas
        potenciales como efectos secundarios o métodos obsoletos.
      </p>
      <StrictModeExample />
    </div>
  );
}

export default StrictModeView;
