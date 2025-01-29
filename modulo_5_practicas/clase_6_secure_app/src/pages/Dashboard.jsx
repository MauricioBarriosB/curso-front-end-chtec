import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";
import { getSecureData } from "../services/api";

const Dashboard = () => {
    const { user } = useAuth();
    const [secureData, setSecureData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("user");
            console.log('* localStorage.getItem(user) -> token : ', token);
            if (!token) {
                setError("No se encontró un token válido. Inicia sesión de nuevo.");
                return;
            }

            try {
                const data = await getSecureData(token);
                setSecureData(data);
            } catch (error) {
                setError("Token inválido o no autorizado " + error);
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
                            <li key={item.id}>{item.info}</li>
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
