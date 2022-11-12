import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import MenuItem from "../MenuItem/MenuItem";
interface MenuProps {

}

const Menu: FunctionComponent<MenuProps> = () => {
    return (
        <nav className="Menu">
            <NavLink to={"/"}>
                <MenuItem content={"Home"} />
            </NavLink>
            <NavLink to={`/posts`}>
                <MenuItem content={"Posts"} />
            </NavLink>
            <NavLink to={`/search`}>
                <MenuItem content={"Search"} />
            </NavLink>
            <NavLink to={`/myProfile`}>
                <MenuItem content={"My profile"} />
            </NavLink>
            <NavLink to={`/login`}>
                <MenuItem content={"Login"} />
            </NavLink>
        </nav >
    );
}

export default Menu;