import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import SearchFlights from "../pages/SearchFlights";
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
                            <ProtectedRoute allowedRoles={["admin", "guest"]}>
                                <Home />
                            </ProtectedRoute>
                        }
                    />


                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "guest"]}>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/search-flights"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "guest"]}>
                                <SearchFlights />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/medicalteam"
                        element={
                            <ProtectedRoute allowedRoles={["admin"]}>
                                <MedicalTeam />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </HashRouter>
        </AuthProvider>
    );
};

export default AppRoutes;
