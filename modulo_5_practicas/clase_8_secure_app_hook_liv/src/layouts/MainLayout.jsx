import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from 'react';
import livLogo from "../assets/logo_white.svg";
import livLogoHeader from "../assets/logo.svg";

const MainLayout = ({ children }) => {
    const { user, logout } = useAuth();
    const [buttonTogg, setButtonTogg] = useState(false);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm">
                    <div className="container-fluid">
                        <img src={livLogoHeader} alt="Vite logo" width="50px" className="mx-4" />
                        <button onClick={() => setButtonTogg(!buttonTogg)} className="navbar-toggler" type="button" data-bs-toggle="collapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={!buttonTogg ? 'collapse navbar-collapse' : 'collapse navbar-collapse collapse show'} id="collapsible-navbar">
                            <ul className="navbar-nav">

                                {user && (
                                    <li className="nav-item mx-3">
                                        <Link className="nav-link" to="/home">< i className="las la-home"></i> Home</Link>
                                    </li>
                                )}

                                {(user?.roles === "admin" || user?.roles === "doctor") && (
                                    <li className="nav-item mx-3">
                                        <Link className="nav-link" to="/patients"> <i className="lab la-creative-commons-by"></i> Pacientes</Link>
                                    </li>
                                )}

                                {(user?.roles === "admin" || user?.roles === "guest") && (
                                    <li className="nav-item mx-3">
                                        <Link className="nav-link" to="/medicalteam"> <i className="las la-user-friends"></i> Equipo Médico</Link>
                                    </li>
                                )}

                                {(user?.roles === "admin" || user?.roles === "guest") && (
                                    <li className="nav-item mx-3">
                                        <Link className="nav-link" to="/appointments"> <i className="las la-inbox"></i> Citas</Link>
                                    </li>
                                )}

                                {!user && (
                                    <li className="nav-item mx-3">
                                        <Link className="nav-link" to="/login"> <i className="las la-sign-in-alt"></i> Login</Link>
                                    </li>
                                )}

                                {!user && (
                                    <li className="nav-item mx-3">
                                        <Link className="nav-link" to="/signin"> <i className="las la-address-card"></i> Crear Cuenta</Link>
                                    </li>
                                )}

                                {user && (
                                    <li className="nav-item mx-3">
                                        <a className="nav-link" onClick={logout}>  <i className="las la-sign-out-alt"></i> Salir</a>
                                    </li>
                                )}

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main>{children}</main>

            <footer className="footer">
                <div className="container">
                    <img className="footer__logo mb-5" src={livLogo} />

                    <div className="pb-4">
                        <div className="d-inline-block">
                            <i className="las la-phone"></i> 800 600 2010
                        </div>
                        <div className="d-inline-block">
                            <i className="las la-envelope ps-4"></i> contacto@livhospital.com
                        </div>
                        <div className="d-inline-block">
                            <i className="las la-map-marker ps-4"></i> Av. Salud 1234, Santiago, Chile
                        </div>
                    </div>

                    <i className="lab la-google-plus-g la-3x p-2"></i>
                    <i className="lab la-facebook la-3x p-2"></i>
                    <i className="lab la-twitter la-3x p-2"></i>
                    <i className="lab la-vimeo-v la-3x p-2"></i>
                    <i className="lab la-pinterest la-3x p-2"></i>
                    <i className="lab la-blogger-b la-3x p-2"></i>
                    <p>Síguenos en nustras redes sociales</p>
                    <p>© 2024 LIV Hospital - Derechos Reservados.</p>
                </div>
            </footer>
        </>
    );
};

export default MainLayout;
