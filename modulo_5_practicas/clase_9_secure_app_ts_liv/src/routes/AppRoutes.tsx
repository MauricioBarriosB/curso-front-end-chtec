import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Login from "../pages/Login";

/*
import Home from "../pages/Home";
import Signin from "../pages/Signin";

import Patients from "../pages/Patients";
import ProtectedRoute from "./ProtectedRoute";
import Appointments from "../pages/Appointments";
import MedicalTeam from "../pages/MedicalTeam";
*/

const AppRoutes: React.FC = () => {
    return (
        <AuthProvider>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Login />} />

                </Routes>
            </HashRouter>
        </AuthProvider>
    );
};

export default AppRoutes;
