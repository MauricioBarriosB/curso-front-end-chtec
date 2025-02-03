import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import { userLogIn } from '../services/DocsApi';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        let userData = {
            username: username,
            password: password,
        }

        try {
            const dataApi = await userLogIn(userData);

            /*
            if (dataApi) {
                login('admin', dataApi.jwt);
                navigate('/dashboard'); // if role = admin, user, doctor redirect.
            }
                */
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <MainLayout>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Usuario:</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </MainLayout>
    );
};

export default Login;
