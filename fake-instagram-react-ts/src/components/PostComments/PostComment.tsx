import { FunctionComponent, useContext, useState } from "react";
import { CgClose } from "react-icons/cg";
import ICommentResponse from "../../API/ICommentResponse";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import "./PostComment.scss";

interface PostCommentProps {
    comment: ICommentResponse
}
const PostComments: FunctionComponent<PostCommentProps> = ({ comment }) => {
    const { email } = useContext<ILoginContext>(LoginContext);
    return (
        <div className="Post__Comment">
            <p>{comment.name}</p>
            <p>{comment.body}</p>
            <p>{comment.email === email && <CgClose style={{ fontSize: "1.2em", color: "red" }} />}</p>
        </div>
    );
}

export default PostComments;