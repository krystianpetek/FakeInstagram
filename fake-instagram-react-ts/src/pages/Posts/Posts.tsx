import "./Posts.scss";
import { FunctionComponent, useContext } from "react";
import Post from "../../components/Post/Post";
import { IPostContext, PostContext } from "../../contexts/PostContext/PostContext";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";

interface PostsProps { }
const PostList: FunctionComponent<PostsProps> = () => {
    const { email } = useContext<ILoginContext>(LoginContext);
    const postContext = useContext<IPostContext>(PostContext);

    return (
        <div className="Posts">


            {email && <div className="Posts__AddNew">
                <p>Add new Post: </p>

            </div>}

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