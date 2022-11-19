import { FunctionComponent } from "react";
import "./InputUserInfo.scss";

type InputType = "text" | "password";
interface InputUserInfoProps {
    name: string;
    type: InputType;
    value: string | number;
    placeholder: string;
    readOnly?: boolean;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputUserInfo: FunctionComponent<InputUserInfoProps> = ({ value, name, type, placeholder, handleOnChange, readOnly }) => {
    return (
        <div className="InputUserInfo">
            <label
                className="InputUserInfo__Label"
                htmlFor={name}
            >{placeholder}
            </label>
            <input
                className="InputUserInfo__Properties"
                id={name}
                readOnly={readOnly}
                name={name}
                type={type}
                onChange={handleOnChange}
                value={value}
                placeholder={placeholder} />
        </div>
    )
}

export default InputUserInfo;