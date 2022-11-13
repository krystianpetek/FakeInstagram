import React, { FunctionComponent, useContext } from "react";
import { Navigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { IUserContext, UserContext } from "../../contexts/UserContext/UserContext";
import "./Login.scss";
interface LoginProps { }

const Login: FunctionComponent<LoginProps> = () => {

    const {
        userName, setUserName,
        email, setEmail,
        isUserLogged, setIsUserLogged
    }: ILoginContext = useContext(LoginContext);

    const { users }: IUserContext = useContext(UserContext);


    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = users.find(user => user.email === email);
        if (user && user.username === userName) {
            setIsUserLogged(true);
            return;
        }
    }

    return (
        <div className="Login">
            {(isUserLogged) ? <Navigate to="/"></Navigate> : ""}
            <form className="Login__Form" onSubmit={handleLogin} noValidate>
                <Input
                    key="Login__UsernameInput"
                    name="username"
                    value={userName}
                    handleChange={event => setUserName(event.currentTarget?.value)}
                    type="text"
                    placeholder="Please enter your username!"

                />
                <Input key="Login__PasswordInput"
                    name="password"
                    value={email}
                    handleChange={event => setEmail(event.currentTarget.value)}
                    type="password"
                    placeholder="Please enter your email!"
                />
                <div className="Login__FormSubmitButton">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;