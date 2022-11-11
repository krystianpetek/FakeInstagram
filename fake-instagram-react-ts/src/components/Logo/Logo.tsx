import { FunctionComponent } from "react";
import React, { Route, Routes } from "react-router-dom"
import "./Logo.scss";
interface LogoProps {

}

const Logo: FunctionComponent<LogoProps> = () => {
    return (
        <div className="Logo">
            <h1>LOGO</h1>
        </div >
    );
}

export default Logo;