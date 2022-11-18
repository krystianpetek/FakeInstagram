import React, { FunctionComponent } from "react";
import "./Header.scss"
import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";

interface HeaderProps { }
const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <header className="Header">
            <Logo />
            <Menu />
        </header>
    );
}

export default Header;