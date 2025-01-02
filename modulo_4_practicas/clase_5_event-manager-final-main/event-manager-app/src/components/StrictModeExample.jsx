import { useEffect, useState } from "react";

function StrictModeExample() {
  const [count, setCount] = useState(0);

  // Simulación de un problema común: efectos secundarios ejecutados dos veces en modo desarrollo
  useEffect(() => {
    console.log("Efecto ejecutado");
  }, []);

  return (
    <div>
      <h3>Ejemplo de Modo Estricto</h3>
      <p>El valor actual del contador es: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default StrictModeExample;
