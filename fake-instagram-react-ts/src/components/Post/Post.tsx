import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import ICommentResponse from "../../API/ICommentResponse";
import IPostResponse from "../../API/IPostResponse";
import IUserResponse from "../../API/IUserResponse";
import { LoginContext, ILoginContext } from "../../contexts/LoginContext/LoginContext";
import { IPostContext, PostContext } from "../../contexts/PostContext/PostContext";
import { UserContext, IUserContext } from "../../contexts/UserContext/UserContext";
import InputPostComment from "../InputPostComment/InputPostComment";
import PostComment from "../PostComments/PostComment";
import "./Post.scss";
import { randomColor } from "../../Helpers/randomColor";

interface PostProps {
    post: IPostResponse
    comments: Array<ICommentResponse>
}
const Post: FunctionComponent<PostProps> = (props) => {
    const { username, email } = useContext<ILoginContext>(LoginContext);
    const { users } = useContext<IUserContext>(UserContext);
    const { addComment, removePost, removeComment } = useContext<IPostContext>(PostContext);
    const myProfile: (IUserResponse | null) = users.find(user => user.email === email && user.username === username) ?? null;

    const handleNewComment = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && event.currentTarget.value.length !== 0) {
            addComment({
                postId: post.id,
                body: event.currentTarget.value,
                name: username,
                email: email
            });
            event.currentTarget.value = ""
        }
    }

    const { post, comments } = props;
    const postTitle = `${post?.title[0]?.toUpperCase()}${post?.title?.substring(1)}`;
    const postUser = users.find(user => user.id === post.userId)!;
    const postComments = comments.map(comment => {
        return <PostComment
            key={comment.id}
            comment={comment}
            removeComment={removeComment} />
    })

    return (
        <div className="Post" style={{ border: `2px solid ${randomColor()}` }}>
            <div className="Post__Header">
                <p className="Post__Username">{postUser?.name}</p>
                <div
                    className="Post__Delete"
                    onClick={() => { removePost(post.id) }}>
                    {email === postUser.email && <CgClose className="Post__DeleteSign" />}
                </div>
            </div>
            <p className="Post__Title">{postTitle}</p>
            <p className="Post__Body">{post.body}</p>

            <div className="Post__Comments">{postComments}</div>

            {myProfile?.id && <InputPostComment name="newComment"
                placeholder="Add new comment here!"
                type="text"
                key={post.id}
                handleKeyDown={handleNewComment} />}
        </div>
    );
}

export default Post;