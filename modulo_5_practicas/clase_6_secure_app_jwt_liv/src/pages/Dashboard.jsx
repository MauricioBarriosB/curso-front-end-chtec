import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";
import { getAllPatients } from "../services/DocsApi";

const Dashboard = () => {
    const { user } = useAuth();
    const { jwt } = useAuth();
    const { logout } = useAuth();
    const [secureData, setSecureData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (!jwt) {
                setError("No se encontró un token válido. Inicia sesión de nuevo.");
                return;
            }

            try {
                const dataApi = await getAllPatients(jwt);
                if (dataApi) {
                    setSecureData(dataApi.content);
                } else {
                    logout();
                    navigate('/');
                }
            } catch (error) {
                console.log('JWT inválido o no autorizado:', error);
            }
        };

        if (user?.role === "admin") {
            fetchData();
        }
    }, [user]);

    return (
        <MainLayout>
            <h1>Dashboard</h1>
            {user?.role === "admin" && (
                <>
                    <p>Bienvenido, Administrador. Aquí están los datos protegidos:</p>

                    {error && <p style={{ color: "red" }}> {error} </p>}
                    <ul>
                        {secureData.map((item) => (
                            <li key={item.id}>{item.fname}  {item.lname} | {item.rut} | {item.status} </li>
                        ))}
                    </ul>
                </>
            )}
            {user?.role === "user" && (
                <>
                    <p>
                        Bienvenido, Usuario. No tienes acceso a los datos protegidos (te
                        faltan ginetas).
                    </p>
                    <p>
                        Consulta con el administrador (el que realmente tiene las ginetas)
                        para más información.
                    </p>
                </>
            )}
        </MainLayout>
    );
};

export default Dashboard;
