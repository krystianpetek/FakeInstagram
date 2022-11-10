import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
interface MenuProps {

}

const Menu: FunctionComponent<MenuProps> = () => {
    return (

        <nav className="Menu">
            <NavLink to={`/posts`}>Posts</NavLink>
            <NavLink to={`/login`}>Login</NavLink>
        </nav>
    );
}

export default Menu;