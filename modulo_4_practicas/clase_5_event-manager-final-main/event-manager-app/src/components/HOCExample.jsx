import BaseComponent from "./BaseComponent";
import withClickHandler from "../hocs/withClickHandler";
import withExtraInfo from "../hocs/withExtraInfo";

// Aplicar HOCs
const ClickableComponent = withClickHandler(BaseComponent);
const EnhancedComponent = withExtraInfo(ClickableComponent);

function HOCExample() {
  return (
    <div>
      <h2>Ejemplo de Componentes de Orden Superior</h2>
      <EnhancedComponent name="Extendido" />
    </div>
  );
}

export default HOCExample;
