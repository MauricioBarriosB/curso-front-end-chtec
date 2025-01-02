import { useState } from "react";
import Header from "./components/Header";
import Home from "./views/Home";
import SocketIOView from "./views/SocketIOView";
import LazyLoadingView from "./views/LazyLoadingView";
import TransformEventsView from "./views/TransformEventsView";
import CategoryView from "./views/CategoryView";
import FragmentView from "./views/FragmentView";
import TransitionView from "./views/TransitionView";
import HOCView from "./views/HOCView";
import OptimizedView from "./views/OptimizedView";
import PortalView from "./views/PortalView";
import ReconciliationView from "./views/ReconciliationView";
import ProfilerView from "./views/ProfilerView";
import PropTypesView from "./views/PropTypesView";
import StrictModeView from "./views/StrictModeView";
import UncontrolledView from "./views/UncontrolledView";
import WebComponentView from "./views/WebComponentView";
import "./App.css";

function App() {
  // Estado para controlar la vista actual
  const [view, setView] = useState("home");

  return (
    <div className="App">
      <Header />
      <nav>
        {/* Botones para cambiar la vista */}
        <button onClick={() => setView("home")}>Inicio</button>
        <button onClick={() => setView("socketio")}>Socket.io</button>
        <button onClick={() => setView("lazy")}>División de Código</button>
        <button onClick={() => setView("transform")}>Transformar Elementos</button>
        <button onClick={() => setView("categories")}>Categorías</button>
        <button onClick={() => setView("fragment")}>Fragmentos</button>
        <button onClick={() => setView("transitions")}>Transiciones</button>
        <button onClick={() => setView("hocs")}>HOCs</button>
        <button onClick={() => setView("optimized")}>Optimización</button>
        <button onClick={() => setView("portals")}>Portales</button>
        <button onClick={() => setView("reconciliation")}>Reconciliación</button>
        <button onClick={() => setView("profiler")}>React Profiler</button>
        <button onClick={() => setView("proptypes")}>PropTypes</button>
        <button onClick={() => setView("strictmode")}>Modo Estricto</button>
        <button onClick={() => setView("uncontrolled")}>No Controlados</button>
        <button onClick={() => setView("webcomponents")}>WebComponents</button>
      </nav>
      {/* Mostramos la vista actual */}
      {view === "home" && <Home />}
      {view === "socketio" && <SocketIOView />}
      {view === "lazy" && <LazyLoadingView />}
      {view === "transform" && <TransformEventsView />}
      {view === "categories" && <CategoryView />}
      {view === "fragment" && <FragmentView />}
      {view === "transitions" && <TransitionView />}
      {view === "hocs" && <HOCView />}
      {view === "optimized" && <OptimizedView />}
      {view === "portals" && <PortalView />}
      {view === "reconciliation" && <ReconciliationView />}
      {view === "profiler" && <ProfilerView />}
      {view === "proptypes" && <PropTypesView />}
      {view === "strictmode" && <StrictModeView />}
      {view === "uncontrolled" && <UncontrolledView />}
      {view === "webcomponents" && <WebComponentView />}
    </div>
  );
}

export default App;
