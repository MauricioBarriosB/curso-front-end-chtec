function withExtraInfo(WrappedComponent) {
  // Esta función retorna un componente funcional que envuelve al componente original
  return function ExtraInfoComponent(props) {
    const extraInfo = "Este componente tiene funcionalidad extendida.";

    // Se retorna el componente original envuelto en un div que muestra información adicional
    return (
      <div>
        {/* Se renderiza el componente original */}
        <WrappedComponent {...props} />
        <p style={{ fontStyle: "italic", color: "#666" }}>{extraInfo}</p>
      </div>
    );
  };
}

export default withExtraInfo;
