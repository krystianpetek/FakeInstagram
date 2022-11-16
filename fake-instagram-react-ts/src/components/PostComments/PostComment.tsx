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
            <div className="Post__Text">
                <p>{comment.name}</p>
                <p>{comment.body}</p>
            </div>
            <div className="Post__Delete">{comment.email === email && <CgClose className="Post__DeleteSign" />}</div>
        </div>
    );
}

export default PostComments;