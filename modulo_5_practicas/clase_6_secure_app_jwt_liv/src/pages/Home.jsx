import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";

import { getAllPatients } from "../services/DocsApi";

const Home = () => {
  const { user } = useAuth();

          const fetchData = async () => {
              try {
                  const dataApi = await getAllPatients(null);
                 // console.log(dataApi);
              } catch (error) {
                  console.log('JWT inválido o no autorizado:', error);
              }
          };
          fetchData();



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
