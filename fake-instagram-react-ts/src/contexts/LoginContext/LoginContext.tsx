import { createContext } from "react";
export interface ILoginContext {
    username: string;
    setUsername: (userName: string) => void;
    email: string;
    setEmail: (email: string) => void;
    isUserLogged: boolean;
    setIsUserLogged: (isLogged: boolean) => void;
}

const defaultContextState: ILoginContext = {
    username: "",
    setUsername: () => { },
    email: "",
    setEmail: () => { },
    isUserLogged: false,
    setIsUserLogged: () => { }
}

export const LoginContext: React.Context<ILoginContext> = createContext(defaultContextState);