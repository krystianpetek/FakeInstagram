import "./Posts.scss";
import API from "./../../API/api";
import { useState, FunctionComponent, useEffect } from "react";
import Post from "../../components/Post/Post";
import { PostResponse } from "../../API/PostResponse";

interface PostsProps { }
const PostList: FunctionComponent<PostsProps> = () => {

    const getPosts = () => API.get(`posts`)
        .then<PostResponse[]>(response => {
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("While fetching posts something went wrong!");
        })
        .then(response => setPosts(response))
        .catch(error => {
            console.log(error);
            window.location.href = '/errorPage';
        }
        );

    const [Posts, setPosts] = useState<Partial<PostResponse[]>>();

    useEffect(
        () => {
            getPosts();
        }, [])

    return (
        <div className="Posts">
            {Posts?.map(x => <Post key={x?.id} post={x!}></Post>).sort(() => Math.random() - 0.5)}
        </div >
    );
}

export default PostList;