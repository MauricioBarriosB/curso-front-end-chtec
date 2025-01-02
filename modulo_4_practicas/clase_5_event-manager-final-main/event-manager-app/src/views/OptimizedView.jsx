import React, { Profiler } from "react";
import OptimizedEventList from "../components/OptimizedEventList";

function OptimizedView() {
  const onRenderCallback = (
    id, // Nombre del Profiler (OptimizedEventList)
    phase, // "mount" o "update"
    actualDuration // Tiempo que tardó en renderizar
  ) => {
    console.log(`${id} (${phase}) tomó ${actualDuration}ms para renderizar.`);
  };

  return (
    <div>
      <h1>Optimización del Rendimiento</h1>
      <Profiler id="OptimizedEventList" onRender={onRenderCallback}>
        <OptimizedEventList />
      </Profiler>
    </div>
  );
}

export default OptimizedView;
