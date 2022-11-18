import { useState } from "react";
import { ILoginContext, LoginContext } from "./LoginContext";

interface LoginContextProviderProps {
    children: JSX.Element;
}
export const LoginContextProvider = (props: LoginContextProviderProps) => {

    const [Login, setLogin] = useState<string>("");
    const [Email, setEmail] = useState<string>("");
    const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

    const handleSetLogin = (login: string) => {
        setLogin(login);
    };

    const handleSetEmail = (email: string) => {
        setEmail(email);
    };

    const handleSetIsUserLogged = (isLogged: boolean) => {
        setIsUserLogged(isLogged);
    };

    const LoginState: ILoginContext = {
        username: Login,
        setUsername: handleSetLogin,
        email: Email,
        setEmail: handleSetEmail,
        isUserLogged: isUserLogged,
        setIsUserLogged: handleSetIsUserLogged,
    };
    return (
        <div className="App">
            <LoginContext.Provider value={LoginState}>
                {props.children}
            </LoginContext.Provider>
        </div>
    );
};
