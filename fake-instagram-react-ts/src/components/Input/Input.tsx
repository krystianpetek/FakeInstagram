import { ChangeEvent, FunctionComponent } from "react";
import "./Input.scss";
type InputType = "text" | "password" | "checkbox";

interface InputProps {
    name: string;
    type: InputType;
    value?: string | number;
    checked?: boolean;
    placeholder: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<InputProps> = (props) => {
    const { name, checked, value, type, placeholder, handleChange } = props;
    const label = name[0]?.toUpperCase() + name.substring(1);
    return (
        <div className="Input">
            <label
                className="Input__Label"
                htmlFor={name}>{label}</label>
            <input
                className="Input__Properties"
                id={name}
                name={name}
                checked={checked}
                value={value}
                onChange={handleChange}
                type={type}
                placeholder={placeholder} />
        </div>
    )
}

export default Input;