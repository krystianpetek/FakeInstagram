import "./Footer.scss"
import React, { FunctionComponent } from "react";
import { FaGithub, FaFacebook } from "react-icons/fa"
interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className="Footer">
            <p>Copyright &copy; 2022</p>
            <p>Krystian Petek</p>
            <a href="https://facebook.com"><FaFacebook /></a>
            <FaGithub />

        </footer>);
}

export default Footer;