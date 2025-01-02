import SocketProvider from "../context/SocketContext";
import SocketForm from "../components/SocketForm";
import SocketEventList from "../components/SocketEventList";

function SocketIOView() {
  return (
    <SocketProvider>
      <div>
        <h1>Gestión de Eventos en Tiempo Real</h1>
        <SocketForm />
        <SocketEventList />
      </div>
    </SocketProvider>
  );
}

export default SocketIOView;
