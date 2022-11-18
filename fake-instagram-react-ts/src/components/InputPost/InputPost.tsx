import React, { FunctionComponent } from "react";
import "./InputPost.scss";
import Button from "../Shared/Button/Button";
import IPostRequest from "../../API/Request/IPostRequest";

type InputType = "text" | "password";
interface InputPostProps {
    name: string;
    type: InputType;
    value?: string | number;
    placeholder?: string;
    newPost: IPostRequest,
    setNewPost: any,
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}
const InputPost: FunctionComponent<InputPostProps> = (props) => {
    const { name, type, placeholder, newPost } = props;

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newValue = { ...newPost }
        const currentTarget = event.currentTarget;

        if (currentTarget.id === "inputTitle") {
            newValue.title = currentTarget.value;
        }
        else { newValue.body = currentTarget.value; }

        props.setNewPost(newValue);
    }
    return (

        <form onSubmit={props.handleSubmitForm}>
            <div className="InputPost">
                <input
                    className="InputPost__Title"
                    id={"inputTitle"}
                    name={name}
                    value={newPost.title}
                    onChange={handleOnChange}
                    placeholder={"Enter a title for new post!"}
                    type={type} />

                <textarea
                    className="InputPost__Body"
                    id={"inputBody"}
                    name={name}
                    value={newPost.body}
                    onChange={handleOnChange}
                    placeholder={placeholder} />

                <div className="InputPost__Button">
                    <Button type="submit">Create!</Button>
                </div>
            </div >
        </form>
    )
}

export default InputPost;