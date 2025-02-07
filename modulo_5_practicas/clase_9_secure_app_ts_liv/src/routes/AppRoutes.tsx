import { Routes, Route, HashRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

import Login from "../pages/Login";
import Signin from "../pages/Signin";
import Home from "../pages/Home";

/*
import Patients from "../pages/Patients";
import ProtectedRoute from "./ProtectedRoute";
import Appointments from "../pages/Appointments";
import MedicalTeam from "../pages/MedicalTeam";
*/

const AppRoutes = () => {
    return (
        <AuthProvider>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/login" element={<Login />} />
                    
                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "doctor", "guest"]}>
                                <Home />
                            </ProtectedRoute>
                        }
                    />

                </Routes>
            </HashRouter>
        </AuthProvider>
    );
};

export default AppRoutes;
