import { FunctionComponent, useContext, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import ICommentResponse from "../../API/ICommentResponse";
import IPostResponse from "../../API/IPostResponse";
import IUserResponse from "../../API/IUserResponse";
import { LoginContext, ILoginContext } from "../../contexts/LoginContext/LoginContext";
import { IPostContext, PostContext } from "../../contexts/PostContext/PostContext";
import { UserContext, IUserContext } from "../../contexts/UserContext/UserContext";
import "./Post.scss";

const randomColor = () => {
    const randomHex = () => Math.floor(Math.random() * 255).toString(16);
    const r = randomHex();
    const g = randomHex();
    const b = randomHex();
    return `#${r}${g}${b}`;
}
interface PostProps {
    post: IPostResponse
    comments: Array<ICommentResponse>
}
const Post: FunctionComponent<PostProps> = ({ post, comments }) => {
    const { username } = useContext<ILoginContext>(LoginContext);
    const users = useContext<IUserContext>(UserContext).users;
    const myProfile: IUserResponse = users.find(user => user.id === post.userId)!;
    const posts = useContext<IPostContext>(PostContext);

    const commtoPost = comments.map(comment => <li key={comment.id}>{comment.id}{comment.body}</li>);
    return (
        <div className="Post" style={{ border: `2px solid ${randomColor()}` }}>

            <p className="Post__Username">{myProfile.name}{myProfile.username === username && <div style={{ cursor: "pointer" }} onClick={() => { }}><CgClose style={{ fontSize: "1.2em", color: "red" }} /></div>}</p>

            <p className="Post__Title">{post.title[0]?.toUpperCase()}{post.title.substring(1)}</p>
            <p className="Post__Body">{post.body}</p>
            <div>Comments</div>
            {commtoPost}

            <button
                onClick={() =>
                    posts.addComment({
                        postId: post.id,
                        body: "comment",
                        email: "email",
                        name: "ketep"
                    }
                    )
                }

            >NEW COMMENT</button>
        </div >
    );
}

export default Post;