import { createContext, ReactNode, useState } from "react";

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
  let signIn = (newAuth:any) => {
    setAuth(newAuth);
    localStorage.setItem("auth", JSON.stringify(newAuth));
  };

  let signOut = () => {
    setAuth({});
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
