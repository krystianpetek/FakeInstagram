import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";

interface MenuListItemProps {
    children: Array<string>;
}

const MenuListItem: FunctionComponent<MenuListItemProps> = (props) => {
    const Items = props.children.map(item =>
        <Link to={`/${item}`} ><MenuItem content={item} /></Link>);
    return (
        <>
            {Items}
        </>
    );
}

export default MenuListItem;