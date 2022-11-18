import { FunctionComponent, useContext } from "react";
import { CgClose } from "react-icons/cg";
import ICommentResponse from "../../API/Response/ICommentResponse";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import "./PostComment.scss";

interface PostCommentProps {
    comment: ICommentResponse;
    removeComment: (commentId: number) => void
}
const PostComments: FunctionComponent<PostCommentProps> = ({ comment, removeComment }) => {
    const { email } = useContext<ILoginContext>(LoginContext);

    const handleRemoveComment = () => {
        removeComment(comment.id);
    }

    return (
        <div className="Post__Comment">
            <div className="Post__Comment__Text">
                <p className="Post__Comment__User">{comment.email}</p>
                <p>{comment.body}</p>
            </div>
            <div
                className="Post__Comment__Delete"
                onClick={handleRemoveComment}>
                {comment.email === email && <CgClose className="Post__Comment__DeleteSign" />}</div>
        </div >
    );
}

export default PostComments;