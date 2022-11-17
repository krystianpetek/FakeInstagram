import { FunctionComponent } from "react";
import "./Button.scss";

interface ButtonProps {
    children: string
    type?: "submit" | "reset" | "button"
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    return (
        <div className="Button">
            <button type={props.type ?? "submit"} className="Button__Button">
                {props.children}
            </button>
        </div>
    );
}

export default Button;