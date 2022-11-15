import "./Posts.scss";
import { useState, FunctionComponent, useContext } from "react";
import Post from "../../components/Post/Post";
import IPostResponse from "../../API/IPostResponse";
import { IPostContext, PostContext } from "../../contexts/PostContext/PostContext";

interface PostsProps { }
const PostList: FunctionComponent<PostsProps> = () => {

    const postContext = useContext<IPostContext>(PostContext);

    return (
        <div className="Posts">
            {postContext.posts.map(x => <Post key={x?.id} post={x!}></Post>).sort(() => Math.random() - 0.5)}
            {/* {postContext.posts.map(x => <Post key={x?.id} post={x!}></Post>)} */}
            { }
        </div >

    );
}

export default PostList;