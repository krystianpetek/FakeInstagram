import { createContext } from "react";
import ICommentRequest from "../../API/ICommentRequest";
import ICommentResponse from "../../API/ICommentResponse";
import IPostRequest from "../../API/IPostRequest";
import IPostResponse from "../../API/IPostResponse";

export interface IPostContext {
    posts: Array<IPostResponse>,
    addPost: (post: IPostRequest) => void,
    removePost: (postId: number) => void,
    comments: Array<ICommentResponse>
    addComment: (comment: ICommentRequest) => void,
    removeComment: (commentId: number) => void,
}

const defaultContextState: IPostContext = {
    posts: [],
    addPost: () => { },
    removePost: () => { },
    comments: [],
    addComment: () => { },
    removeComment: () => { },
}

export const PostContext: React.Context<IPostContext> = createContext(defaultContextState);