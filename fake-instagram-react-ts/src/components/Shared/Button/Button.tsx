import { FunctionComponent} from "react";
import "./Button.scss";

interface ButtonProps {
    children: string
    type?: "submit" | "reset" | "button"
    onClick?: () => void;
    state?: boolean
}

const Button: FunctionComponent<ButtonProps> = (props) => {

    const handleOnClick = () => {
        props.onClick!();
        // props.setState!(prevValue => !prevValue);
    }
    return (
        <div className="Button">
            <button onClick={handleOnClick} type={props.type ?? "submit"} className="Button__Button">
                {props.children}
            </button>
        </div>
    );
}

export default Button;