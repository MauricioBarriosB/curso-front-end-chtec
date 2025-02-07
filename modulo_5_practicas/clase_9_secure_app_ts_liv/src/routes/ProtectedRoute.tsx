import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type RouteProps = {
    children: JSX.Element | JSX.Element[];
    allowedRoles: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: RouteProps) => {
    const { userRoles } = useAuth();

    if (!userRoles) {
        return <Navigate to="/login" />;
    }
    if (!allowedRoles.includes(userRoles)) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;