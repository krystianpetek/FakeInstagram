import React, { FunctionComponent, useContext, useState } from "react";
import "./Posts.scss";
import Post from "../../components/Post/Post";
import InputPost from "../../components/InputPost/InputPost";
import { IPostContext, PostContext } from "../../contexts/PostContext/PostContext";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { IUserContext, UserContext } from "../../contexts/UserContext/UserContext";
import IPostRequest from "../../API/Request/IPostRequest";
import IUserResponse from "../../API/Response/IUserResponse";

interface PostsProps { }
const Posts: FunctionComponent<PostsProps> = () => {
    const { email, username, isUserLogged } = useContext<ILoginContext>(LoginContext);
    const { users } = useContext<IUserContext>(UserContext);
    const myProfile: (IUserResponse | null) = users.find(user => user.email === email && user.username === username) ?? null;
    const { addPost, posts, comments } = useContext<IPostContext>(PostContext);

    const [newPost, setNewPost] = useState<IPostRequest>({ body: "", title: "", userId: 0 });

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(event);
        event.preventDefault();
        if (!newPost.title.length || !newPost.title.length || !(myProfile?.id)) {
            return;
        }
        addPost({
            userId: myProfile.id,
            title: newPost.title,
            body: newPost.body
        });
        setNewPost({ body: "", title: "", userId: 0 })
    }
    const myPosts = posts.map(post => {
        const postComments = comments.filter(comment => comment.postId === post.id);
        return (
            <Post
                key={post.id}
                post={post}
                comments={postComments}
            ></Post>
        )
    });
    return (
        <div className="Posts">
            {email && isUserLogged &&
                <div className="Posts__AddNew">
                    <p className="Posts__AddNew__Title">Add new post</p>
                    <InputPost name="newPost"
                        type="text"
                        newPost={newPost}
                        setNewPost={setNewPost}
                        placeholder="Add new post here!"
                        handleSubmitForm={handleSubmitForm} />
                </div>}
            {myPosts}
        </div >
    );
}

export default Posts;