import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.scss";
import { IValidateField } from "../../API/IValidateField";
import Input from "../../components/Shared/Input/Input";
import Button from "../../components/Shared/Button/Button";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { IUserContext, UserContext } from "../../contexts/UserContext/UserContext";
import { baseURL } from "../../API/baseURL";

interface LoginProps { }
const Login: FunctionComponent<LoginProps> = () => {
    const {
        username, setUsername,
        email, setEmail,
        isUserLogged, setIsUserLogged
    }: ILoginContext = useContext(LoginContext);
    const { users }: IUserContext = useContext(UserContext);

    const [validUsername, setValidUsername] = useState<IValidateField>(
        {
            message: "Username not exists.",
            valid: false
        })

    const [validEmail, setValidEmail] = useState<IValidateField>(
        {
            message: "Wrong e-mail.",
            valid: false
        })

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = users.find(user => user.username === username);
        if (user?.email === email) {
            setIsUserLogged(true);
            return;
        }

        if (user?.username !== username) {
            setValidUsername({
                ...validUsername,
                valid: false
            })
            return;
        }

        if (user?.email !== email) {
            setValidEmail({
                ...validEmail,
                valid: false
            })
            return;
        }
    }

    const handleSetUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget?.value)
        setValidUsername({
            ...validUsername,
            valid: true
        })
        return;
    };

    const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget?.value)
        setValidEmail({
            ...validEmail,
            valid: true
        })
    };

    useEffect(() => {
        setEmail("");
        setUsername("");

        setValidUsername({
            ...validUsername,
            valid: true
        })

        setValidEmail({
            ...validEmail,
            valid: true
        })
    }, [])
    return (
        <div className="Login">
            {(isUserLogged) ? <Navigate to={`${baseURL}/`}></Navigate> : ""}
            <form className="Login__Form" onSubmit={handleLogin} noValidate>
                <Input
                    key="Login__UsernameInput"
                    name="username"
                    value={username}
                    handleChange={event => handleSetUsername(event)}
                    type="text"
                    placeholder="Please enter your username!"
                    validate={validUsername}
                />
                <Input key="Login__EmailInput"
                    type="text"
                    name="email"
                    value={email}
                    handleChange={event => handleSetEmail(event)}
                    placeholder="Please enter your email!"
                    validate={validEmail}
                />
                <Button>Login</Button>
            </form>
        </div>
    );
}

export default Login;