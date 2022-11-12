import { FunctionComponent } from "react";
import "./MenuItem.scss";

interface MenuItemProps {
    content: string
}

const MenuItem: FunctionComponent<MenuItemProps> = (props) => {
    return (
        <div className="MenuItem">
            <p>{props.content}</p>
            <div className="MenuItem__Bottom"></div>
        </div>
    );
}

export default MenuItem;