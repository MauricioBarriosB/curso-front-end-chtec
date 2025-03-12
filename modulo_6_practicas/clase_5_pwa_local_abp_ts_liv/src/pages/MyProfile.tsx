import { useAuth } from "../context/AuthContext";
import React, { useEffect, useState, useRef } from "react";
import livLogo from "../assets/logo.svg";
import MainLayout from "../layouts/MainLayout";
import Webcam from "react-webcam"
/*
interface IitemData {
    name: string | undefined;
    desc: string | undefined;
}
*/
const MyProfile = () => {
    const { userData } = useAuth();

    /*
    useEffect(() => {
    
        if (navigator.onLine) {
            fetchSpecialtiesOnline();
        } else {
            fetchSpecialtiesLocal();
  
    }, []);

*/






return (
    <MainLayout>
        <div className="container marketing">
            <div className="row text-center">

                <h2 className="text-primary py-4">Mi Perfil</h2>


                <h4 className=" pb-4">

                    Estás autenticado como <strong>{userData.name}</strong> con perfil <strong>{userData.roles}</strong>.<br />

                </h4>

                <p className="text-center">

                    A continuación presentamos nuestros principales servicios
                    hospitalarios.</p>

                    <Webcam/>

            </div>

            <div className="row">



            </div>




        </div>
    </MainLayout>
);
};

export default MyProfile;