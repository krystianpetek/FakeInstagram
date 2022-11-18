import { FunctionComponent } from "react";
import "./InputPostComment.scss";

type InputType = "text" | "password";
interface InputPostCommentProps {
    name: string;
    type: InputType;
    value?: string | number;
    placeholder: string;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
const InputPostComment: FunctionComponent<InputPostCommentProps> = ({ name, type, placeholder, handleKeyDown }) => {
    return (
        <div className="InputPostComment">
            <input
                className="InputPostComment__Properties"
                id={name}
                name={name}
                onKeyDown={handleKeyDown}
                type={type}
                placeholder={placeholder} />
        </div>
    )
}

export default InputPostComment;