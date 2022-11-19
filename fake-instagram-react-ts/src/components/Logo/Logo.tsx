import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom"
import { baseURL } from "../../API/baseURL";
import "./Logo.scss";

interface LogoProps { }
const Logo: FunctionComponent<LogoProps> = () => {
    return (
        <Link to={`${baseURL}/`}>
            <div className="Logo" draggable="true">
                <span className="Logo__Text">FakeInstagram</span>
            </div >
        </Link>
    );
}

export default Logo;