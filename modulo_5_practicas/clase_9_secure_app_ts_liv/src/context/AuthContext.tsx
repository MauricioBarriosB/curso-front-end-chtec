import { createContext, useContext, useEffect, useState } from "react";
//import { decryptData, encryptData } from "../utils/Encryption;

interface ProviderProps {
    userName: string,
    userRoles: string,
    jwt: string,
    login(name: string, roles: string, jwt: string): void,
    logout(): void,
}

const AuthContext = createContext<ProviderProps>({
    userName: '',
    userRoles: '',
    jwt: '',
    login: () => { },
    logout: () => { }
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [userName, setUserName] = useState<string | null>(null);
    const [userRoles, setUserRoles] = useState<string | null>(null);
    const [jwt, setJWT] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const storedUserName = localStorage.getItem("userName");
        if (storedUserName) {
            // const decryptedUser = decryptData(storedUser);
            // console.log('* AuthContext storedUser -> decrypted :', decryptedUser);
            setUserName(storedUserName);
        }

        const storedJWT = localStorage.getItem("jwt");
        if (storedJWT) {
            //setJWT(storedJWT);
        }
        setLoading(false);
    }, []);


    const login = (userName: string, userRoles: string, jwt: string) => {

        // ** Login y Signin -> save encrypted data to localStorage  :  // setItem("user", encryptData(userData));

        setUserName(userName);
        setUserRoles(userRoles);
        setJWT(jwt);
        localStorage.setItem("userName", userName);
        localStorage.setItem("userRoles", userRoles);
        localStorage.setItem("jwt", jwt);
    };

    const logout = () => {
        setUserName(null);
        setUserRoles(null);
        setJWT(null);
        localStorage.removeItem("userName");
        localStorage.removeItem("userRoles");
        localStorage.removeItem("jwt");
    };

    // ** If isAuthenticated = true user and JWT is set :


    const value: any = {
        userName,
        userRoles,
        jwt,
        login,
        logout,
        //isAuthenticated: !!user,
    };


    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : <p>Cargando...</p>}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);