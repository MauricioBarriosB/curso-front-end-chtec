import React, { Suspense, useState } from "react";

// Componente cargado dinámicamente
const LazyLoadedComponent = React.lazy(() =>
  import("../components/LazyLoadedComponent")
);

function LazyLoadingView() {
  // Estado para controlar la carga del componente
  const [loadComponent, setLoadComponent] = useState(false);

  return (
    <div>
      <h1>Vista de Carga Diferida por Click</h1>
      {/* Botón para cargar el componente */}
      <button onClick={() => setLoadComponent(true)}>
        Cargar Componente
      </button>
      {/* Carga del componente */}
      {loadComponent && (
        <Suspense fallback={<p>Cargando componente...</p>}>
          <LazyLoadedComponent />
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoadingView;
