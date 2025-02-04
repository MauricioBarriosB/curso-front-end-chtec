import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }
    if (!allowedRoles.includes(user.roles)) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
