import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import SearchFlights from "../pages/SearchFlights";
import Vulnerabilities from "../pages/Vulnerabilities";

const AppRoutes = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="./" element={<Home />} />
                    <Route path="./signin" element={<Signin />} />
                    <Route path="./login" element={<Login />} />
                    <Route
                        path="./dashboard"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "user"]}>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="./search-flights"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "user"]}>
                                <SearchFlights />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="./vulnerabilities"
                        element={
                            <ProtectedRoute allowedRoles={["admin"]}>
                                <Vulnerabilities />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default AppRoutes;
