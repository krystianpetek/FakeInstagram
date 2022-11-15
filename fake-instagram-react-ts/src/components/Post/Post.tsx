import { FunctionComponent, useContext, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { IPostResponse } from "../../API/IPostResponse";
import { IUserResponse } from "../../API/IUserResponse";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { IUserContext, UserContext } from "../../contexts/UserContext/UserContext";
import "./Post.scss";

interface PostProps {
    post: IPostResponse
}
const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
const Post: FunctionComponent<PostProps> = ({ post }) => {
    const { username } = useContext<ILoginContext>(LoginContext);
    const users = useContext<IUserContext>(UserContext).users;
    const myProfile: IUserResponse = users.find(user => user.id === post.userId)!;

    return (
        <div className="Post" style={{ border: `2px solid #${randomColor()}` }}>

            <p className="Post__Username">{myProfile?.name}{myProfile?.username === username && <CgClose style={{ color: "red" }} />}</p>

            <p className="Post__Title">{post.title[0]?.toUpperCase()}{post.title.substring(1)}</p>
            <p className="Post__Body">{post.body}</p>
        </div>
    );
}

export default Post;