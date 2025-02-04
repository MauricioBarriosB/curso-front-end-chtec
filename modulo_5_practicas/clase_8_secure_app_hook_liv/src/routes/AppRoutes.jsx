import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Login from "../pages/Login";
import Patients from "../pages/Patients";
import ProtectedRoute from "./ProtectedRoute";
import Appointments from "../pages/Appointments";
import MedicalTeam from "../pages/MedicalTeam";

// ** Use HashRouter instead of Route due GitHub subfolder system  :

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

                    <Route
                        path="/patients"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "doctor"]}>
                                <Patients />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/medicalteam"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "guest"]}>
                                <MedicalTeam />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/appointments"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "guest"]}>
                                <Appointments />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </HashRouter>
        </AuthProvider>
    );
};

export default AppRoutes;
