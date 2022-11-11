import { createContext } from "react";

interface ILoginContext {
    userName?: string,
    isUserLogged: boolean;
    loginUser: () => void;
    logoutUser: () => void;
}

const defaultState: ILoginContext = {
    isUserLogged: false,
    loginUser: () => { },
    logoutUser: () => { }
}

const LoginContext: React.Context<ILoginContext> = createContext(defaultState);

export { LoginContext, defaultState };
export type { ILoginContext };