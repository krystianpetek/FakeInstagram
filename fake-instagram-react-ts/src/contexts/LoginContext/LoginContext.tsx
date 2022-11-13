import { createContext } from "react";

interface LoginInfo {
    userName: string,
    email: string
}

interface ILoginContext {
    userName?: string,
    email?: string,
    isUserLogged: boolean;
    loginUser: (loginInformation: LoginInfo) => void;
    logoutUser: () => void;
}

const defaultState: ILoginContext = {
    isUserLogged: false,
    email: "",
    userName: "",
    loginUser: function (loginInformation: LoginInfo) {
        this.userName = loginInformation.userName;
        this.email = loginInformation.email;
        this.isUserLogged = true;
    },
    logoutUser: function () {
        this.userName = "";
        this.email = "";
        this.isUserLogged = false;
    }

}


const LoginContext: React.Context<ILoginContext> = createContext(defaultState);

export { LoginContext, defaultState };
export type { ILoginContext };