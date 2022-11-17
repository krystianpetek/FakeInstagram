import "./Posts.scss";
import { FunctionComponent, useContext } from "react";
import Post from "../../components/Post/Post";
import { IPostContext, PostContext } from "../../contexts/PostContext/PostContext";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { randomColor } from "../../Helpers/randomColor";
import InputPost from "../../components/InputPost/InputPost";
import { IUserContext, UserContext } from "../../contexts/UserContext/UserContext";
import IUserResponse from "../../API/IUserResponse";

interface PostsProps { }
const Posts: FunctionComponent<PostsProps> = () => {
    const { email, username } = useContext<ILoginContext>(LoginContext);
    const { users } = useContext<IUserContext>(UserContext);
    const myProfile: (IUserResponse | null) = users.find(user => user.email === email && user.username === username) ?? null;
    const { addPost, posts, comments } = useContext<IPostContext>(PostContext);

    const handleNewPost = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && event.currentTarget.value.length !== 0) {
            addPost({
                userId: myProfile!.id,
                title: "",
                body: event.currentTarget.value
            });
            event.currentTarget.value = ""
        }
    }
    return (

        <div className="Posts">
            {email &&
                <div className="Posts__AddNew" style={{ border: `2px solid ${randomColor()}` }}>
                    <p className="Posts__AddNew__Title">Add new post</p>
                    <InputPost name="newComment"
                        placeholder="Add new post here!"
                        type="text"
                        handleKeyDown={handleNewPost} />
                </div>}

            {posts.map(x => {
                const postComments = comments.filter(comment => comment.postId === x.id);
                return (
                    <Post
                        key={x.id}
                        post={x}
                        comments={postComments}
                    ></Post>
                )
            })}
        </div>
    );
}

export default Posts;