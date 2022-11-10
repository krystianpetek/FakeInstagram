import { FunctionComponent } from "react";
import React, {  Route, Routes } from "react-router-dom"
import "./Logo.scss";
interface LogoProps {

}

const Logo: FunctionComponent<LogoProps> = () => {
    return (
        <div className="Logo">
            <Routes>
                <Route path="/items" element={<h1>dd</h1>} />
            </Routes>
        </div >
    );
}

export default Logo;