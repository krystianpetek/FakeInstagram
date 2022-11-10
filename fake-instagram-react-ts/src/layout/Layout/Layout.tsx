import "./Layout.scss";
import React, { FunctionComponent } from "react";
import Header from "../../views/Header/Header";
import Main from "../../views/Main/Main";
import Footer from "../../views/Footer/Footer";

interface LayoutProps {

}

const Layout: FunctionComponent<LayoutProps> = () => {
    return (
        <div className="Layout">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default Layout;