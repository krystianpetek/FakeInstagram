import { FunctionComponent, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import MenuItem from "../MenuItem/MenuItem";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { baseURL } from "../../API/baseURL";

interface MenuProps { }
const Menu: FunctionComponent<MenuProps> = () => {
    const { isUserLogged } = useContext<ILoginContext>(LoginContext);
    return (
        <nav className="Menu">
            <NavLink to={`${baseURL}/`}>
                <MenuItem content={"Home"} />
            </NavLink>
            <NavLink to={`${baseURL}/posts`}>
                <MenuItem content={"Posts"} />
            </NavLink>
            <NavLink to={`${baseURL}/search`}>
                <MenuItem content={"Search"} />
            </NavLink>

            {(isUserLogged)
                ?
                <>
                    <NavLink to={`${baseURL}/myProfile`}>
                        <MenuItem content={"My profile"} />
                    </NavLink>
                    <NavLink to={`${baseURL}/logout`}>
                        <MenuItem content={"Logout"} />
                    </NavLink>
                </>
                :
                <NavLink to={`${baseURL}/login`}>
                    <MenuItem content={"Login"} />
                </NavLink>
            }
        </nav>
    );
}

export default Menu;