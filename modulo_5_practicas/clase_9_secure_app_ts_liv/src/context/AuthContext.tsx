import { createContext, useContext, useEffect, useState } from "react";
import { decryptData, encryptData } from '../utils/Encryption';

type ContextProps = {
    children: JSX.Element | JSX.Element[]
}

interface IAuthContext {
    userName: string | null,
    userRoles: string | null,
    jwt: string | null,
    login(name: string, roles: string, jwt: string): void,
    logout(): void,
};

// ** Create  Auth Context whith null values :

const AuthContext = createContext<IAuthContext>({
    userName: null,
    userRoles: null,
    jwt: null,
    login: () => { },
    logout: () => { }
});

export const AuthProvider = ({ children }: ContextProps) => {
    const [userName, setUserName] = useState<string | null>(null);
    const [userRoles, setUserRoles] = useState<string | null>(null);
    const [jwt, setJWT] = useState<string | null>(null);

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const lsUserName = localStorage.getItem("userName");
        if (lsUserName) setUserName(decryptData(lsUserName));

        const lsUserRoles = localStorage.getItem("userRoles");
        if (lsUserRoles) setUserName(decryptData(lsUserRoles));

        const lsJWT = localStorage.getItem("jwt");
        if (lsJWT) setJWT(lsJWT);
        setLoading(false);
    }, []);

    // ** Login y Signin -> save encrypted data to localStorage  :

    const login = (userName: string, userRoles: string, jwt: string) => {
        setUserName(userName);
        setUserRoles(userRoles);
        setJWT(jwt);
        localStorage.setItem("userName", encryptData(userName));
        localStorage.setItem("userRoles", encryptData(userRoles));
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

    // ** Expose the values context to all Childrens  :

    const propsValues: IAuthContext = {
        userName,
        userRoles,
        jwt,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={propsValues}>
            {!loading ? children : <p>Cargando...</p>}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);