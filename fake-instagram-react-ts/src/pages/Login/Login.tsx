import React, { FormEvent, FunctionComponent, useState } from "react";
import "./Login.scss";
interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {

    const [Login, setLogin] = useState<string>("");
    const [Password, setPassword] = useState<string>("");
    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div className="Login">

            <form className="Login__Form" onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input
                    className="Login__UsernameInput"
                    id="username"
                    name="username"
                    value={Login}
                    onChange={event => setLogin(event.currentTarget.value)}
                    type="text"
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    className="Login__PasswordInput"
                    id="password"
                    name="password"
                    value={Password}
                    onChange={event => setPassword(event.currentTarget.value)}
                    type="password"
                ></input>
                <div className="Login__FormSubmitButton">
                    <button type="submit">Login</button>
                </div>
            </form>

        </div >
    );
}

export default Login;