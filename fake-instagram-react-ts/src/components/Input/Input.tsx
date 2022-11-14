import { ChangeEvent, FunctionComponent } from "react";
import { IValidateField } from "../../pages/Login/IValidateField";
import "./Input.scss";
type InputType = "text" | "password";

interface InputProps {
    name: string;
    type: InputType;
    value?: string | number;
    checked?: boolean;
    placeholder: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    validate: IValidateField

}

const Input: FunctionComponent<InputProps> = (props) => {
    const { name, checked, value, type, placeholder, handleChange, validate } = props;
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
            <span className={`error ${validate.valid && "hidden"}`}>{validate.message}</span>

        </div>
    )
}

export default Input;