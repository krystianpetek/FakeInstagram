import { FunctionComponent, useContext } from "react";
import { PostResponse } from "../../API/PostResponse";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { IUserContext, UserContext } from "../../contexts/UserContext/UserContext";
import "./Post.scss";

interface PostProps {
    post: PostResponse
}
const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
const Post: FunctionComponent<PostProps> = ({ post }) => {
    const { username } = useContext<ILoginContext>(LoginContext);
    const users = useContext<IUserContext>(UserContext).users;
    const myProfile = users.find(user => user.id === post.userId);

    return (
        <div className="Post" style={{ border: `2px solid #${randomColor()}` }}>
            {myProfile?.username === username ? "DELETE" : ""}
            <p className="Post__Username">{myProfile?.name}</p>
            <p className="Post__Title">{post.title[0]?.toUpperCase()}{post.title.substring(1)}</p>
            <p className="Post__Body">{post.body}</p>
        </div>
    );
}

export default Post;