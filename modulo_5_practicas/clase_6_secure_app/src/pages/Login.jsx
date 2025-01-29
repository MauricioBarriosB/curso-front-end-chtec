import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "password") {
            login("admin");
            navigate("/dashboard");
        } else if (username === "user" && password === "password") {
            login("user");
            navigate("/");
        } else {
            alert("Credenciales incorrectas");
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
