import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  const { user } = useAuth();

  return (
    <MainLayout>
      <h1>Bienvenidos a SafeApp</h1>
      {!user && (
        <p>
          <a href="/login">Iniciar Sesión</a>
        </p>
      )}
      {user && (
        <p>
          Estás autenticado como <strong>{user.role}</strong>.
        </p>
      )}
    </MainLayout>
  );
};

export default Home;
