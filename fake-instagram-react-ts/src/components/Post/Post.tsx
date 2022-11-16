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
const Post: FunctionComponent<PostProps> = ({ post, /*comments*/ }) => {
    const { /*username,*/ email } = useContext<ILoginContext>(LoginContext);
    const users = useContext<IUserContext>(UserContext).users;
    let myProfile: IUserResponse = users.find(user => user.email === email)!;
    const posts = useContext<IPostContext>(PostContext);

    // const commtoPost = comments.map(comment => <p key={comment.id}>{comment.id}. {comment.body} {comment.email === myProfile.email && <CgClose style={{ fontSize: "1.2em", color: "red" }} />}</p>);
    return (
        <div className="Post" style={{ border: `2px solid ${randomColor()}` }}>

            {/* <p className="Post__Username">{myProfile?.name}{myProfile?.username === username && <div style={{ cursor: "pointer" }} onClick={() => { posts.removePost(post.id) }}><CgClose style={{ fontSize: "1.2em", color: "red" }} /></div>}</p> */}

            <p className="Post__Title">{post.title[0]?.toUpperCase()}{post.title.substring(1)}</p>
            <p className="Post__Body">{post.body}</p>
            {/* <div className="Post__Comments">{commtoPost}</div> */}


            <button
                onClick={() =>
                    posts.addComment({
                        postId: post.id,
                        body: "comment",
                        email: myProfile?.email,
                        name: myProfile?.name
                    }
                    )
                }

            >NEW COMMENT</button>
        </div >
    );
}

export default Post;