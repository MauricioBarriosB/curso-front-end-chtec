import { createContext, useContext, useEffect, useState } from "react";
import { decryptData, encryptData } from "../utils/encryption";
// import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [jwt, setJWT] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const decryptedUser = decryptData(storedUser);
            // console.log('* AuthContext storedUser -> decrypted :', decryptedUser)
            setUser(decryptedUser);
        }

        const storedJWT = localStorage.getItem("jwt");
        if (storedJWT) {
            // console.log('** Stored JWT :', jwtDecode(storedJWT));
            setJWT(storedJWT);
        }
        setLoading(false);
    }, []);


    const login = (role, jwt) => {

        // ** Guarda los datos encriptados en el localStorage al hacer login y signin : 

        const userData = {role};
        setUser(userData);
        localStorage.setItem("user", encryptData(userData));

        setJWT(jwt);
        localStorage.setItem("jwt", jwt);
    };

    const logout = () => {
        setUser(null);
        setJWT(null);
        localStorage.removeItem("user");
        localStorage.removeItem("jwt");
    };

    // ** isAuthenticated es verdadero o falso si viene el usuario en nuestro caso seria el jwt

    const value = {
        user,
        jwt,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : <p>Cargando...</p>}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
