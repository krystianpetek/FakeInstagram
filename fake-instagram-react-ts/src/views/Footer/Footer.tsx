import "./Footer.scss"
import React, { FunctionComponent } from "react";
import { FaGithub, FaFacebook } from "react-icons/fa"
interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className="Footer">
            <p>Krystian Petek</p>
            <span style={{ margin: "10px" }}>Copyright &copy; 2022</span>
            <a href="https://facebook.com"><FaFacebook /></a>
            <FaGithub />

        </footer>);
}

export default Footer;