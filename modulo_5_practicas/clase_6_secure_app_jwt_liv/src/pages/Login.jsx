import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import { userLogIn } from '../services/DocsApi';
import DOMPurify from "dompurify";

const Login = () => {
    const {login} = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        let userData = {
            username: DOMPurify.sanitize(username),
            password: DOMPurify.sanitize(password)
        }

        try {
            const dataApi = await userLogIn(userData);
            if (dataApi) {
                userData = {
                    name: dataApi.name,
                    roles: dataApi.roles
                }
                login(userData, dataApi.jwt);
                navigate('/home');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <MainLayout>
        <div className="container marketing">

            <div className="row text-center">
                <h2 className="text-primary pt-4"> <i className="las la-sign-in-alt"></i> Inicia sesión en Portal LIV</h2>
                <h5 className="pt-4 pb-4">
                    En caso de no tener cuenta, puedes crear una con perfil "Visita" accediendo al menú superior y presionando el enlace "Crear Cuenta".
                </h5>
            </div>

            <div className="card-body d-flex justify-content-center">
                <form className="contact-form" onSubmit={handleLogin}>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Usuario"
                        className="form-control my-4"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                 <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        className="form-control my-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <div className="py-4 text-center">
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value=" &raquo; Iniciar Sesión"
                        />
                    </div>
                </form>
            </div>
        </div>
        </MainLayout>
    );
};

export default Login;
