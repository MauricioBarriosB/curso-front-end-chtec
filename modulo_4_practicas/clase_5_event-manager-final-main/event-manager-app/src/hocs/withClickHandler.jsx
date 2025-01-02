function withClickHandler(WrappedComponent) {
  // Esta función retorna un componente funcional que envuelve al componente original
  return function ClickHandlerComponent(props) {
    // Esta función maneja el evento
    const handleClick = () => {
      console.log(`Componente clickeado: ${props.name}`);
    };

    // Se retorna el componente original envuelto en un div que escucha el evento click
    return (
      <div onClick={handleClick}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withClickHandler;
