import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type RouteProps = {
    children: JSX.Element | JSX.Element[];
    allowedRoles: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: RouteProps) => {
    const { userData } = useAuth();

    if (!userData.roles) {
        return <Navigate to="/login" />;
    }
    if (!allowedRoles.includes(userData.roles)) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;