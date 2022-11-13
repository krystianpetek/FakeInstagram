import React, { FunctionComponent, useState, useContext } from "react";
import Input from "../../components/Input/Input";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import "./Login.scss";
interface LoginProps { }

const Login: FunctionComponent<LoginProps> = () => {

    const context = useContext<ILoginContext>(LoginContext);

    const [Login, setLogin] = useState<string>("");
    const [Password, setPassword] = useState<string>("");
    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        context.loginUser({
            userName: Login,
            email: Password
        })
    }

    const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        context.logoutUser();
    }

    return (
        <div className="Login">

            <form className="Login__Form" onSubmit={handleLogin} noValidate>
                <Input
                    key="Login__UsernameInput"
                    name="username"
                    value={Login}
                    handleChange={event => setLogin(event.currentTarget?.value)}
                    type="text"
                    placeholder="Please enter your username!"

                />
                <Input key="Login__PasswordInput"
                    name="password"
                    value={Password}
                    handleChange={event => setPassword(event.currentTarget.value)}
                    type="password"
                    placeholder="Please enter your password!"
                />
                <div className="Login__FormSubmitButton">
                    <button type="submit">Login</button>
                </div>
            </form>
            <div className="Login__FormSubmitButton">
                <button onClick={handleLogout} type="submit">Logout</button>
            </div>
        </div>
    );
}

export default Login;