import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import { userSignIn } from '../services/DocsApi';
import DOMPurify from "dompurify";

const Signin = () => {
    const {login} = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        let userData = {
            username: DOMPurify.sanitize(username),
            password: DOMPurify.sanitize(password),
            roles: 'guest'
        }

        try {
            const dataApi = await userSignIn(userData);
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
                <h2 className="text-primary pt-4">  <i className="las la-address-card"> </i> Crea Cuenta de Acceso en Portal LIV</h2>
                <h5 className="pt-4 pb-4">
                    En el siguiente formulario podrás crear una cuenta con perfil "Visita", y podras acceder al contenido del sitio, equipo médico, entre otros.
                </h5>
            </div>

            <div className="card-body d-flex justify-content-center">
                <form className="contact-form" onSubmit={handleSignIn}>
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
                            value=" &raquo; Crear Cuenta"
                        />
                    </div>
                </form>
            </div>
        </div>
        </MainLayout>
    );
};

export default Signin;