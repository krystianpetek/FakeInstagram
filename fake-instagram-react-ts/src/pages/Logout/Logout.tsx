import React, { FunctionComponent, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { baseURL } from "../../API/baseURL";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";

interface LogoutProps { }
const Logout: FunctionComponent<LogoutProps> = () => {
    const { isUserLogged, setIsUserLogged, setEmail, setUsername }: ILoginContext = useContext(LoginContext);
    useEffect(
        () => {
            if (isUserLogged) {
                setUsername("");
                setEmail("");
                setIsUserLogged(false);
            }
        }, [isUserLogged])

    return (
        <div className="Login">
            <Navigate replace to={`${baseURL}/`}></Navigate>
        </div>
    );
}

export default Logout;