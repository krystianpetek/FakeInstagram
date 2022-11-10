import { FunctionComponent } from "react";

interface MenuItemProps {
    content: string
}

const MenuItem: FunctionComponent<MenuItemProps> = (props) => {
    return (
        <div>
            <p>{props.content}</p>
        </div>
    );
}

export default MenuItem;