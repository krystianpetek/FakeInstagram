import { createContext } from "react";
import ICommentRequest from "../../API/Request/ICommentRequest";
import IPostRequest from "../../API/Request/IPostRequest";
import ICommentResponse from "../../API/Response/ICommentResponse";
import IPostResponse from "../../API/Response/IPostResponse";

export interface IPostContext {
    posts: Array<IPostResponse>,
    addPost: (post: IPostRequest) => Promise<void>,
    removePost: (postId: number) => void,
    comments: Array<ICommentResponse>
    addComment: (comment: ICommentRequest) => void,
    removeComment: (commentId: number) => void,
}

const defaultContextState: IPostContext = {
    posts: [],
    addPost: () => { return new Promise<void>(() => { }) },
    removePost: () => { },
    comments: [],
    addComment: () => { },
    removeComment: () => { },
}

export const PostContext: React.Context<IPostContext> = createContext(defaultContextState);