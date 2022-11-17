import { FunctionComponent } from "react";
import "./Button.scss";

interface ButtonProps {
    children: string
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    return (
        <div className="Button">
            <button className="Button__Button">
                {props.children}
            </button>
        </div>
    );
}

export default Button;