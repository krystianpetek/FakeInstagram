import React, { FunctionComponent, useContext, useEffect } from "react";
import "./MyProfile.scss";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { Navigate } from "react-router-dom";

interface MyProfileProps { }

const MyProfile: FunctionComponent<MyProfileProps> = () => {
    const { isUserLogged } = useContext<ILoginContext>(LoginContext)
    return (
        <div className="MyProfile">
            {(!isUserLogged) ? <Navigate replace to="/"></Navigate> : ""}
        </div>
    );
}

export default MyProfile;