import React, { FormEvent, FunctionComponent, useState } from "react";
import Input from "../../components/Input/Input";
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

        </div >
    );
}

export default Login;