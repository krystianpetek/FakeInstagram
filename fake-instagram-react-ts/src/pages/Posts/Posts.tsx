import "./Posts.scss";
import React, { FunctionComponent, useContext, useState } from "react";
import Post from "../../components/Post/Post";
import { IPostContext, PostContext } from "../../contexts/PostContext/PostContext";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { randomColor } from "../../Helpers/randomColor";
import InputPost from "../../components/InputPost/InputPost";
import { IUserContext, UserContext } from "../../contexts/UserContext/UserContext";
import IUserResponse from "../../API/IUserResponse";
import IPostRequest from "../../API/IPostRequest";

interface PostsProps { }
const Posts: FunctionComponent<PostsProps> = () => {
    const { email, username } = useContext<ILoginContext>(LoginContext);
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

    const handleSetNewPost = () => {

    }

    return (
        <div className="Posts">
            {
                email &&
                <div className="Posts__AddNew">
                    <p className="Posts__AddNew__Title">Add new post</p>
                    <InputPost name="newPost"
                        type="text"
                        newPost={newPost}
                        handleOnChange={handleSetNewPost}
                        setNewPost={setNewPost}
                        placeholder="Add new post here!"
                        handleSubmitForm={handleSubmitForm} />
                </div>
            }

            {
                posts.map(post => {
                    const postComments = comments.filter(comment => comment.postId === post.id);
                    return (
                        <Post
                            key={post.id}
                            post={post}
                            comments={postComments}
                        ></Post>
                    )
                })
            }
        </div >
    );
}

export default Posts;