import { FunctionComponent, useContext } from "react";
import { CgClose } from "react-icons/cg";
import IPostResponse from "../../API/IPostResponse";
import IUserResponse from "../../API/IUserResponse";
import { LoginContext, ILoginContext } from "../../contexts/LoginContext/LoginContext";
import { UserContext, IUserContext } from "../../contexts/UserContext/UserContext";
import "./Post.scss";

interface PostProps {
    post: IPostResponse
}
const randomColor = () => {
    const randomHex = () => Math.floor(Math.random() * 255).toString(16);
    const r = randomHex();
    const g = randomHex();
    const b = randomHex();
    return `#${r}${g}${b}`;
}

const Post: FunctionComponent<PostProps> = ({ post }) => {
    const { username } = useContext<ILoginContext>(LoginContext);
    const users = useContext<IUserContext>(UserContext).users;
    const myProfile: IUserResponse = users.find(user => user.id === post.userId)!;

    return (
        <div className="Post" style={{ border: `2px solid ${randomColor()}` }}>

            <p className="Post__Username">{myProfile?.name}{myProfile?.username === username && <CgClose style={{ color: "red" }} />}</p>

            <p className="Post__Title">{post.title[0]?.toUpperCase()}{post.title.substring(1)}</p>
            <p className="Post__Body">{post.body}</p>
        </div>
    );
}

export default Post;