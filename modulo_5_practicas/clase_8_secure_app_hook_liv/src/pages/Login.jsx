import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import { userLogIn } from '../services/DocsApi';
import useForm from "../hooks/UseForm";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const { values, isValid, handleChange, handleSubmit } = useForm(submitFormValues);
    const [error, setError] = useState('');

    function submitFormValues() {
        if (isValid.current) {
            submitApiValues();
            setError('');
        } else {
            setError('Campos inválidos, debes ingresar como mímimo 4 caractéres!');
        }
    };

    const submitApiValues = async () => {
        try {
            const dataApi = await userLogIn(values);
            if (!dataApi.error) {
                let userData = {
                    name: dataApi.name,
                    roles: dataApi.roles
                }
                login(userData, dataApi.jwt);
                navigate('/home');
            } else {
                console.log('* Error code :', dataApi.error);
                setError(dataApi.messages.error);
            }
        } catch (error) {
            console.log(error);
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
                
                {error && <p className="text-danger text-center">{error}</p>}

                <div className="card-body d-flex justify-content-center">

                    <form className="contact-form" onSubmit={handleSubmit}>

                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Usuario"
                            className="form-control my-4"
                            value={values.username || ''}
                            onChange={handleChange}
                            required
                        />

                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                            className="form-control my-4"
                            value={values.password || ''}
                            onChange={handleChange}
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