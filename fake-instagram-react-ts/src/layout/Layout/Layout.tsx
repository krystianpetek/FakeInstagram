import "./Layout.scss";
import React, { FunctionComponent } from "react";
import Header from "../../views/Header/Header";
import Main from "../../views/Main/Main";
import Footer from "../../views/Footer/Footer";
import Title from "../../views/Title/Title";

interface LayoutProps {

}

const Layout: FunctionComponent<LayoutProps> = () => {
    return (
        <div className="Layout">
            <Header />
            <Title />
            <Main />
            <Footer />
        </div>
    );
}

export default Layout;