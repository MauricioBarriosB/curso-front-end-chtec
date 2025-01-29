import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import { userSignIn } from '../services/DocsApi';

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        let userData = {
            username: username,
            password: password,
            roles: 'admin'
        }

        try {
            const dataApi = await userSignIn(userData);
            if (dataApi) {
                login('admin', dataApi.jwt);
                navigate('/dashboard'); // if role = admin, user, doctor redirect.
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <MainLayout>
            <h1>Crear Usuario</h1>
            <form onSubmit={handleSignIn}>
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
                <button type="submit">Sign in</button>
            </form>
        </MainLayout>
    );
};

export default Signin;
