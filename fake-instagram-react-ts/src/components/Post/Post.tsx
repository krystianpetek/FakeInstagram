import { FunctionComponent } from "react";
import { PostsResponse } from "../../pages/Posts/Posts";
import "./Post.scss";

interface PostProps {
    post: PostsResponse
}

const Post: FunctionComponent<PostProps> = (props) => {
    return (
        <div className="Post">
            id: {props.post?.id} | userId: {props.post?.userId}
        </div>
    );
}

export default Post;