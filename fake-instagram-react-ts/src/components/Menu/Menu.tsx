import "./Menu.scss";
import { FunctionComponent, useContext } from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
interface MenuProps { }


const Menu: FunctionComponent<MenuProps> = () => {
    const context = useContext(LoginContext);

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

            {(context.isUserLogged)
                ?
                <NavLink to={`/myProfile`}>
                    <MenuItem content={"My profile"} />
                </NavLink>
                :
                <NavLink to={`/login`}>
                    <MenuItem content={"Login"} />
                </NavLink>
            }
        </nav>
    );
}

export default Menu;