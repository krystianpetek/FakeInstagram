import { FunctionComponent } from "react";
import React, { Route, Routes } from "react-router-dom"
import "./Logo.scss";
interface LogoProps { }

const Logo: FunctionComponent<LogoProps> = () => {
    return (
        <div className="Logo" draggable="true">
            <span className="Logo__Text">FakeInstagram</span>
        </div >
    );
}

export default Logo;