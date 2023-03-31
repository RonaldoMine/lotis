import {createContext, ReactNode, useState} from "react";
import {useNavigate} from "react-router-dom";

type AuthContextType = {
    signIn: Function,
    signOut: Function,
    auth: any
}

type ProviderProps = {
    children?: ReactNode
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({children}: ProviderProps) => {
    const [auth, setAuth] = useState<any>(JSON.parse(localStorage.getItem("auth")!));
    const navigate = useNavigate();
    let signIn = (newAuth: any) => {
        setAuth(newAuth);
        localStorage.setItem("auth", JSON.stringify(newAuth));
    };

    let signOut = () => {
        setAuth({});
        localStorage.removeItem("auth");
        navigate("/auth/sign-in", {replace: true})
    };

    return (
        <AuthContext.Provider value={{auth, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
