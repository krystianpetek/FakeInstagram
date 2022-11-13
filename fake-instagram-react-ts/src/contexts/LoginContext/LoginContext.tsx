import { createContext } from "react";
export interface ILoginContext {
    userName: string;
    setUserName: (userName: string) => void;
    email: string;
    setEmail: (email: string) => void;
    isUserLogged: boolean;
    setIsUserLogged: (isLogged: boolean) => void;
}

const defaultContextState: ILoginContext = {
    userName: "",
    setUserName: () => { },
    email: "",
    setEmail: () => { },
    isUserLogged: false,
    setIsUserLogged: () => { }
}

export const LoginContext: React.Context<ILoginContext> = createContext(defaultContextState);