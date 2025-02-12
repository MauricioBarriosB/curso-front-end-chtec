import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import livLogo from "../assets/logo_white.svg";
import livLogoHeader from "../assets/logo.svg";

type MainLayoutTypes = {
    children: React.JSX.Element | React.JSX.Element[]
}

const MainLayout = ({ children }: MainLayoutTypes) => {
    const { userData, logout } = useAuth();
    const [buttonTogg, setButtonTogg] = useState<boolean>(false);

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

                                {userData.roles && (
                                    <li className="nav-item mx-3">
                                        <Link to="/home" className="nav-link" >< i className="las la-home"></i> Home</Link>
                                    </li>
                                )}

                                {(userData.roles === "admin" || userData.roles === "doctor") && (
                                    <li className="nav-item mx-3">
                                        <Link to="/patients" className="nav-link"> <i className="las la-user-friends"></i> Pacientes</Link>
                                    </li>
                                )}

                                {(userData.roles === "admin" || userData.roles === "guest") && (
                                    <li className="nav-item mx-3">
                                        <Link to="/medicalteam" className="nav-link">  <i className="las la-cog"></i> Equipo Médico</Link>
                                    </li>
                                )}

                                {(userData.roles === "admin" || userData.roles === "guest") && (
                                    <li className="nav-item mx-3">
                                        <Link to="/appointments" className="nav-link"> <i className="las la-inbox"></i> Citas</Link>
                                    </li>
                                )}

                                {!userData.roles && (
                                    <li className="nav-item mx-3">
                                        <Link to="/login" className="nav-link"> <i className="las la-sign-in-alt"></i> Login</Link>
                                    </li>
                                )}

                                {!userData.roles && (
                                    <li className="nav-item mx-3">
                                        <Link to="/signin" className="nav-link"> <i className="las la-address-card"></i> Crear Cuenta</Link>
                                    </li>
                                )}

                                {userData.roles && (
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
                    <img className="footer__logo mb-4" src={livLogo} />

                    <div className="pb-4">
                        <div className="d-inline-block">
                            <i className="las la-phone"></i> 800 900 60606
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
                    <h4 className="pt-4">Síguenos en nustras Redes Sociales</h4>
                </div>

            </footer>

            <div className="footer" style={{ backgroundColor: "#002157", marginTop: 0, paddingBottom: 20 }}>
                <p>© 2025 LIV Hospital<span className="px-2">•</span>www.livhospital.com<span className="px-2">•</span>Derechos Reservados.</p>
            </div>
        </>
    );
};

export default MainLayout;