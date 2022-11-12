import { FunctionComponent } from "react";
import { PostsResponse } from "../../pages/Posts/Posts";
import "./Post.scss";

interface PostProps {
    post: PostsResponse
}
const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
const Post: FunctionComponent<PostProps> = (props) => {
    return (
        <div className="Post" style={{ border: `2px solid #${randomColor()}` }}>
            id: {props.post?.id} | userId: {props.post?.userId}
        </div>
    );
}

export default Post;