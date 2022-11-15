import { useEffect, useState } from "react";
import { IPostContext, PostContext } from "./PostContext";
import IPostResponse from "../../API/IPostResponse";
import ICommentResponse from "../../API/ICommentResponse";
import PostService from "../../API/services/PostService";
import CommentService from "../../API/services/CommentService";
import IPostRequest from "../../API/IPostRequest";
import ICommentRequest from "../../API/ICommentRequest";

interface PostContextProviderProps {
    children: JSX.Element;
}
export const PostContextProvider = (props: PostContextProviderProps): JSX.Element => {

    const [posts, setPosts] = useState<Array<IPostResponse>>(new Array<IPostResponse>());
    const [comments, setComments] = useState<Array<ICommentResponse>>(new Array<ICommentResponse>());

    const handleGetPosts = (posts: Array<IPostResponse>): void => {
        setPosts(posts);
    }
    const handleGetComments = (comments: Array<ICommentResponse>): void => {
        setComments(comments);
    }

    const handleAddPost = (post: IPostRequest): void => {
        PostService.CreatePost(post)
            .then<IPostResponse>(response => response.data)
            .then(post => {
                setPosts((prevValue) => [...prevValue, post])
            })
            .catch(error => {
                console.log(error);
                window.location.href = '/errorPage';
            })
    }

    const handleAddComment = (comment: ICommentRequest): void => {
        CommentService.CreateComment(comment)
            .then<ICommentResponse>(response => response.data)
            .then(comment => {
                setComments((prevValue) => [...prevValue, comment])
            })
            .catch(error => {
                console.log(error);
                window.location.href = '/errorPage';
            })
    }

    const handleRemovePost = (postId: number): void => {
        PostService.DeletePost(postId)
            .then(response => {
                if (response.status === 200) {
                    setPosts((prevValue) => [...prevValue.filter(post => post.id !== postId)]);
                    return;
                }
                throw new Error("Something went wrong!")
            })
            .catch(error => {
                console.log(error);
                window.location.href = '/errorPage';
            })
    }

    const handleRemoveComment = (commentId: number): void => {
        CommentService.DeleteComment(commentId)
            .then(response => {
                if (response.status === 200) {
                    setComments((prevValue) => [...prevValue.filter(comment => comment.id !== commentId)]);
                    return;
                }
                throw new Error("Something went wrong!")
            })
            .catch(error => {
                console.log(error);
                window.location.href = '/errorPage';
            })
    }

    useEffect(() => {

        if (posts.length < 1) {
            PostService.GetPosts()
                .then(response => response.data)
                .then(posts => {
                    handleGetPosts(posts);
                })
                .catch(error => {
                    console.log(error);
                    window.location.href = '/errorPage';
                })
        }

        if (comments.length < 1) {
            CommentService.GetComments()
                .then(response => response.data)
                .then(comments => {
                    handleGetComments(comments);
                })
                .catch(error => {
                    console.log(error);
                    window.location.href = '/errorPage';
                })
        }

    }, []);

    const PostState: IPostContext = {
        posts: posts,
        addPost: handleAddPost,
        removePost: handleRemovePost,
        comments: comments,
        addComment: handleAddComment,
        removeComment: handleRemoveComment,
    };

    return (
        <div className="App">
            <PostContext.Provider value={PostState}>
                {props.children}
            </PostContext.Provider>
        </div>
    );
};
