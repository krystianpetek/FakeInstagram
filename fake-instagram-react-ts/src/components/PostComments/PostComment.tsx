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
            <div className="Post__Comment__Text">
                <p className="Post__Comment__User">{comment.email}</p>
                <p>{comment.body}</p>
            </div>
            <div className="Post__Comment__Delete">{comment.email === email && <CgClose className="Post__Comment__DeleteSign" />}</div>
        </div>
    );
}

export default PostComments;