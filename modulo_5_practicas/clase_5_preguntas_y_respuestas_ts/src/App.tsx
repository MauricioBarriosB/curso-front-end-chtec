
import DoctorList from './components/DoctorList';
import livLogo from "./assets/logo.svg";

const App: React.FC = () => {
    return (
        <div className="container marketing">
            <div className="text-center py-4">
                <img src={livLogo} alt="Vite logo" width="120px" />
            </div>
            <div className="row text-center">
                <h2 className="text-primary py-2">
                    <strong>Ejemplo TypeScript Equipo Médico</strong>
                </h2>
                <h4 className="py-4">
                    Componentes TypeScript: DoctorList.tsx, DoctorCard.tsx y Button.tsx
                </h4>
            </div>
            <DoctorList />
        </div>
    );
};

export default App;