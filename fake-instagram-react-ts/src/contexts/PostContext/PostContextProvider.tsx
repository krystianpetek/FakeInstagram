import { useEffect, useState } from "react";
import { IPostContext, PostContext } from "./PostContext";
import IPostResponse from "../../API/IPostResponse";
import ICommentResponse from "../../API/ICommentResponse";
import PostService from "../../API/services/PostService";
import CommentService from "../../API/services/CommentService";

interface PostContextProviderProps {
    children: JSX.Element;
}
export const PostContextProvider = (props: PostContextProviderProps): JSX.Element => {

    const [posts, setPosts] = useState<Array<IPostResponse>>(new Array<IPostResponse>());
    const [comments, setComments] = useState<Array<ICommentResponse>>(new Array<ICommentResponse>());

    const handleAddPosts = (posts: Array<IPostResponse>): void => {
        setPosts((prevValue) => [...prevValue, ...posts]);
    }

    const handleAddComments = (comments: Array<ICommentResponse>): void => {
        setComments((prevValue) => [...prevValue, ...comments]);
    }

    const handleRemovePost = (postId: number): void => {
        setPosts((prevValue) => [...prevValue.filter(post => post.id !== postId)]);
    }

    const handleRemoveComment = (commentId: number): void => {
        setComments((prevValue) => [...prevValue.filter(comment => comment.id !== commentId)]);
    }

    useEffect(() => {

        if (posts.length < 1) {
            PostService.GetPosts()
                .then(response => response.data)
                .then(posts => {
                    handleAddPosts(posts);
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
                    handleAddComments(comments);
                })
                .catch(error => {
                    console.log(error);
                    window.location.href = '/errorPage';
                })
        }

    }, []);

    const PostState: IPostContext = {
        posts: posts,
        addPosts: handleAddPosts,
        removePost: handleRemovePost,
        comments: comments,
        addComments: handleAddComments,
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
