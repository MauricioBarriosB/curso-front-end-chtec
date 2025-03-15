import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";
import Webcam from "react-webcam"

const MyProfile = () => {

    const { userData } = useAuth();

    return (
        <MainLayout>
            <div className="container marketing">
                <div className="row text-center">

                    <h2 className="text-primary py-4">Mi Perfil</h2>

                    <h4 className=" pb-4">
                        Estás autenticado como <strong>{userData.name}</strong> con perfil <strong>{userData.roles}</strong>.<br />
                    </h4>

                    <p className="text-center">A continuación puedes acceder a la camara de tu dispositivo.</p>

                    <div className="row text-center">
                        <div className="col-md-8 offset-md-2">
                            <Webcam />
                        </div>
                    </div>

                </div>


            </div>
        </MainLayout>
    );
};

export default MyProfile;