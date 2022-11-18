import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom"
import "./Logo.scss";

interface LogoProps { }
const Logo: FunctionComponent<LogoProps> = () => {
    return (
        <Link to="/">
            <div className="Logo" draggable="true">
                <span className="Logo__Text">FakeInstagram</span>
            </div >
        </Link>
    );
}

export default Logo;