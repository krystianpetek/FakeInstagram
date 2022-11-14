import "./Posts.scss";
import API from "./../../API/api";
import { useState, FunctionComponent, useEffect } from "react";
import Post from "../../components/Post/Post";

export interface PostsResponse {
    body: string,
    id: number,
    title: string,
    userId: number
}

interface PostsProps { }
const PostList: FunctionComponent<PostsProps> = () => {

    const getPosts = () => API.get(`posts`)
        .then<PostsResponse[]>(response => {
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

    const [Posts, setPosts] = useState<Partial<PostsResponse[]>>();

    useEffect(
        () => {
            getPosts();
        }, [])

    return (
        <div className="Posts">
            {Posts?.map(x => <Post key={x?.id} post={x!}></Post>)}
        </div >
    );
}

export default PostList;