import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./Menu.scss";
import MenuItem from "./MenuItem/MenuItem";
import MenuListItem from "./MenuListItem/MenuIListItem";

interface MenuProps {

}

const Menu: FunctionComponent<MenuProps> = () => {
    const Items = ["Home", "Page", "Menu", "Items"];

    return (

        <nav className="Menu">
            <MenuListItem>{Items}</MenuListItem>
        </nav>
    );
}

export default Menu;