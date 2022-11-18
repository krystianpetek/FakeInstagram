import { FunctionComponent, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import MenuItem from "../MenuItem/MenuItem";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";

interface MenuProps { }
const Menu: FunctionComponent<MenuProps> = () => {
    const { isUserLogged } = useContext<ILoginContext>(LoginContext);

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

            {(isUserLogged)
                ?
                <>
                    <NavLink to={`/myProfile`}>
                        <MenuItem content={"My profile"} />
                    </NavLink>
                    <NavLink to={`/logout`}>
                        <MenuItem content={"Logout"} />
                    </NavLink>
                </>
                :
                <NavLink to={`/login`}>
                    <MenuItem content={"Login"} />
                </NavLink>
            }
        </nav>
    );
}

export default Menu;