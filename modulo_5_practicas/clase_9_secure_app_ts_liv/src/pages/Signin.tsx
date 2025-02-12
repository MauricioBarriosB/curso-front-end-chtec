import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import { userSignIn } from '../services/DocsApi';
import useForm from "../hooks/useForm";

interface IFormData {
    username: string;
    password: string;
}

const Signin = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);

    //** useForm Hook to validate forms data :

    const useFormCallBack = (flagSubmit: boolean) => {
        if (!flagSubmit) {
            setError('Campos inválidos, debes ingresar como mímimo 4 caractéres!');
        } else {
            submitValues();
        }
    };

    let initialValue: IFormData = { username: '', password: '' };
    const { form, handleChange, handleSubmit } = useForm(initialValue, useFormCallBack);
    const { username, password }: { username?: '', password?: '' } = form;

    //** Passing validation -> submit form :

    const submitValues = async () => {
        // ** Set roles to Guest to avoid new Users sections access :
        const valuesIns = { ...form, roles: 'guest' };
        const data = await userSignIn(valuesIns);
        if (!data.error) {
            login(data);
            navigate('/home');
        } else {
            setError(data.messages.error);
        }
    };

    return (
        <MainLayout>
            <div className="container marketing">

                <div className="row text-center">
                    <h2 className="text-primary pt-4"> <i className="las la-sign-in-alt"></i> Crea Cuenta de Acceso en Portal LIV</h2>
                    <h5 className="pt-4 pb-4">
                        En el siguiente formulario podrás crear una cuenta con perfil "Visita", y podras acceder al contenido del sitio, equipo médico, entre otros.
                    </h5>
                </div>

                {error && <p className="text-danger text-center">{error}</p>}

                <div className="d-flex justify-content-center pb-5">
                    <div className="card">
                        <div className="card-body d-flex justify-content-center" style={{ paddingBottom: 0, paddingTop: 0 }}>
                            <form className="contact-form" autoComplete="off" onSubmit={handleSubmit}>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Usuario"
                                    className="form-control mb-4 my-3"
                                    value={username}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Contraseña"
                                    className="form-control my-4"
                                    value={password}
                                    onChange={handleChange}
                                    required
                                />

                                <div className="pb-3 text-center">
                                    <input
                                        type="submit"
                                        className="btn btn-primary"
                                        value="Iniciar Sesión &raquo;"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Signin;