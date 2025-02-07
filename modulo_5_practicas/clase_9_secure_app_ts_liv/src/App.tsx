
import DoctorList from './components/DoctorList';
import livLogo from "./assets/logo.svg";

const App = () => {
    return (
        <div className="container marketing">
            <div className="text-center py-4">
                <img src={livLogo} alt="Vite logo" width="120px" />
            </div>
            <div className="row text-center">
                <h2 className="text-primary py-2">
                    <strong>Ejemplo TypeScript Equipo Médico</strong>
                </h2>
            </div>
            <DoctorList />
        </div>
    );
};

export default App;