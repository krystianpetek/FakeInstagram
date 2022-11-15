import { createContext } from "react";
import ICommentResponse from "../../API/ICommentResponse";
import IPostResponse from "../../API/IPostResponse";

export interface IPostContext {
    posts: Array<IPostResponse>,
    addPosts: (post: Array<IPostResponse>) => void,
    removePost: (postId: number) => void,
    comments: Array<ICommentResponse>
    addComments: (comment: Array<ICommentResponse>) => void,
    removeComment: (commentId: number) => void,
}

const defaultContextState: IPostContext = {
    posts: [],
    addPosts: () => { },
    removePost: () => { },
    comments: [],
    addComments: () => { },
    removeComment: () => { },
}

export const PostContext: React.Context<IPostContext> = createContext(defaultContextState);