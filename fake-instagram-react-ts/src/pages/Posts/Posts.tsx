import axios from "axios";
import { useState, FunctionComponent, useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import Post from "../../components/Post/Post";
import "./Posts.scss";
interface PostListProps {

}

export interface PostsResponse {
    body: string,
    id: number,
    title: string,
    userId: number
}

const APIURL = "https://jsonplaceholder.typicode.com";

const PostList: FunctionComponent<PostListProps> = () => {

    const getPosts = () => axios.get(`${APIURL}/posts`)
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
            <div>
                {Posts?.map(x => <Post key={x?.id} post={x!}></Post>)}
            </div>
        </div>
    );
}

export default PostList;