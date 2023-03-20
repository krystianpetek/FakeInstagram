import { useEffect, useState } from "react";
import { IPostContext, PostContext } from "./PostContext";
import IPostResponse from "../../API/Response/IPostResponse";
import ICommentResponse from "../../API/Response/ICommentResponse";
import ICommentRequest from "../../API/Request/ICommentRequest";
import { IPostService } from "../../API/services/PostService";
import { ICommentService } from "../../API/services/CommentService";
import IPostRequest from "../../API/Request/IPostRequest";

interface PostContextProviderProps {
    children: JSX.Element;
    postService: IPostService
    commentService: ICommentService
}
export const PostContextProvider = ({ postService, commentService, children }: PostContextProviderProps): JSX.Element => {

    const [posts, setPosts] = useState<Array<IPostResponse>>(new Array<IPostResponse>());
    const [comments, setComments] = useState<Array<ICommentResponse>>(new Array<ICommentResponse>());

    const handleAddPost = async (post: IPostRequest) => {
        const response = await postService.CreatePost(post);
        setPosts((prevValue) => {
            response.id = prevValue.length + 1;
            return [response, ...prevValue]
        })
    };
    // const handleAddPost = async (post: IPostRequest): Promise<void> => {
    //     await PostService.CreatePost(post)
    //         .then<IPostResponse>(response => response.data)
    //         .then(post => {
    //             setPosts((prevValue) => {
    //                 post.id = prevValue.length + 1;
    //                 return [post, ...prevValue]
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             // window.location.href = '/errorPage';
    //         })
    // }

    const handleRemovePost = async (postId: number): Promise<void> => {
        await postService.DeletePost(postId);
        setPosts((prevValue) => [
            ...prevValue.filter((post) => post.id !== postId),
        ]);
    }
    // const handleRemovePost = async (postId: number): Promise<void> => {
    //     await PostService.DeletePost(postId)
    //         .then(response => {
    //             if (response.status === 200) {
    //                 setPosts((prevValue) => [...prevValue.filter(post => post.id !== postId)]);
    //                 return;
    //             }
    //             throw new Error("Something went wrong!")
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             // window.location.href = '/errorPage';
    //         })
    // }

    const handleAddComment = async (comment: ICommentRequest): Promise<void> => {
        const response = await commentService.CreateComment(comment);
        setComments((prevValue) => {
            response.id = prevValue.length + 1;
            return [...prevValue, response];
        });
    }
    // const handleAddComment = async (comment: ICommentRequest): Promise<void> => {
    //     await ICommentService.CreateComment(comment)
    //         .then<ICommentResponse>(response => response.data)
    //         .then(comment => {
    //             setComments((prevValue) => {
    //                 comment.id = prevValue.length + 1;
    //                 return [...prevValue, comment]
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             // window.location.href = '/errorPage';
    //         })
    // }

    const handleRemoveComment = async (commentId: number): Promise<void> => {
        await commentService.DeleteComment(commentId);
        setComments((prevValue) => [
            ...prevValue.filter((comment) => comment.id !== commentId),
        ]);
    }
    // const handleRemoveComment = async (commentId: number): Promise<void> => {
    //     await ICommentService.DeleteComment(commentId)
    //         .then(response => {
    //             if (response.status === 200) {
    //                 setComments((prevValue) => [...prevValue.filter(comment => comment.id !== commentId)]);
    //                 return;
    //             }
    //             throw new Error("Something went wrong!")
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             // window.location.href = '/errorPage';
    //         })
    // }

    useEffect(() => {
        if (posts.length < 1) {
            const fetchPosts = async () => {
                const posts = await postService.GetPosts()
                setPosts(posts);
            }
            fetchPosts();
        }

        if (comments.length < 1) {
            const fetchComments = async () => {
                const comments = await commentService.GetComments();
                setComments(comments);
            }
            fetchComments();
        }

    }, [comments.length, posts.length]);

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
                {children}
            </PostContext.Provider>
        </div>
    );
};
