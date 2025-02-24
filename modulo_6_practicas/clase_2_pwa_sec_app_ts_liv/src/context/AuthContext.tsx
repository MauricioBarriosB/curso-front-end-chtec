import { createContext, useContext, useEffect, useState } from "react";
import { decryptData, encryptData } from '../utils/Encryption';

type LoginTypes = {
    id: number | null;
    name: string | null;
    roles: string | null;
    jwt: string | null;
};

interface IAuthContext {
    userData: LoginTypes,
    login(userData: LoginTypes): void,
    logout(): void,
};

type ContextTypes = {
    children: React.JSX.Element | React.JSX.Element[] 
};

const iniValues:LoginTypes = { id: null, name: null, roles: null, jwt: null }

// ** Create  Auth Context whith null values :

const AuthContext = createContext<IAuthContext>({
    userData: iniValues,
    login: () => { },
    logout: () => { }
});

export const AuthProvider = ({ children }: ContextTypes) => {
    const [userData, setUserData] = useState<LoginTypes>(iniValues);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const lsUserData = localStorage.getItem("userData");
        if (lsUserData) {
            let dsUserData:LoginTypes = decryptData(lsUserData);
            setUserData(dsUserData);
        }
        setLoading(false);
    }, []);

    // ** Login y Signin -> save encrypted data to localStorage  :

    const login = (userData: LoginTypes) => {
        setUserData(userData);
        localStorage.setItem("userData", encryptData(userData));
    };

    const logout = () => {
        setUserData(iniValues);
        localStorage.removeItem("userData");
    };

    // ** Expose the methods & properties context to all Childrens  :

    const propsValues: IAuthContext = {
        userData,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={propsValues}>
            {!loading ? children : <p> Cargando datos...</p>}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);