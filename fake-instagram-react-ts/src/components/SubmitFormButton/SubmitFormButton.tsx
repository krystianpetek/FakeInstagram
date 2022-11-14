import { FunctionComponent } from "react";
import "./SubmitFormButton.scss";

interface SubmitFormButtonProps {
    children: string
}

const SubmitFormButton: FunctionComponent<SubmitFormButtonProps> = (props) => {
    return (
        <div className="SubmitFormButton">
            <button className="SubmitFormButton__Button">
                {props.children}
            </button>
        </div>
    );
}

export default SubmitFormButton;