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
            // console.log('* AuthContext storedUser -> decrypted :', decryptedUser);
            setUser(decryptedUser);
        }

        const storedJWT = localStorage.getItem("jwt");
        if (storedJWT) {
            // console.log('** Stored JWT :', jwtDecode(storedJWT));
            setJWT(storedJWT);
        }
        setLoading(false);
    }, []);


    const login = (userData, jwt) => {

        // ** Login y Signin -> save encrypted data to localStorage  : 
        
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

    // ** If isAuthenticated = true user and JWT is set :

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