import "./Posts.scss";
import { FunctionComponent, useContext } from "react";
import Post from "../../components/Post/Post";
import { IPostContext, PostContext } from "../../contexts/PostContext/PostContext";

interface PostsProps { }
const PostList: FunctionComponent<PostsProps> = () => {

    const postContext = useContext<IPostContext>(PostContext);

    return (
        <div className="Posts">
            {postContext.posts.map(x => {
                const comments = postContext.comments.filter(comment => comment.postId === x.id);
                return (
                    <Post
                        key={x.id}
                        post={x}
                        comments={comments}
                    ></Post>
                )
            })                // .sort(() => Math.random() - 0.5)
            }
        </div >

    );
}

export default PostList;