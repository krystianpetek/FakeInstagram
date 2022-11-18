import "./Footer.scss"
import React, { FunctionComponent } from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa"

interface FooterProps { }
const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className="Footer">
            <p>Copyright &copy; 2022 </p>
            <div className="line"></div>
            <p>Krystian Petek</p>
            <div className="line"></div>
            <a href="https://www.facebook.com/krystianpetek"><FaFacebook /></a>
            <a href="https://github.com/krystianpetek"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/krystian-petek-3731b9215/"><FaLinkedin /></a>
        </footer >
    );
}

export default Footer;