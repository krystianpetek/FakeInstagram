import { FunctionComponent } from "react";
import Button from "../Shared/Button/Button";
import "./InputPost.scss";
type InputType = "text" | "password";

interface InputPostProps {
    name: string;
    type: InputType;
    value?: string | number;
    placeholder?: string;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputPost: FunctionComponent<InputPostProps> = (props) => {
    const { name, type, placeholder, handleKeyDown } = props;
    return (
        <div className="InputPost">
            <input
                className="InputPost__Title"
                id={name}
                name={name}
                onKeyDown={handleKeyDown}
                placeholder={"Enter a title for new post!"}
                type={type} />

            <textarea
                className="InputPost__Body"
                id={name}
                name={name}
                placeholder={placeholder} />

            <div className="InputPost__Button">
                <Button>Create!</Button>
            </div>
        </div>
    )
}

export default InputPost;