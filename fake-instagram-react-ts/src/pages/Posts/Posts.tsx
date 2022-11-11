import { useState, FunctionComponent, useEffect } from "react";
import "./Posts.scss";
interface PostListProps {

}

interface PostsResponse {
    body: string,
    id: number,
    title: string,
    userId: number
}

const APIURL = "https://jsonplaceholder.typicode.com";

const PostList: FunctionComponent<PostListProps> = () => {
    const getPosts = () => fetch(`${APIURL}/posts`)
        .then(response => {
            if (response.status === 200)
                return response.json();
            throw new Error("ERROR");
        })
        .then(response => setPosts(response))
        .catch();

    const [Posts, setPosts] = useState<Partial<PostsResponse[]>>();

    useEffect(
        () => {
            getPosts()
        }
        , [])

    return (
        <div className="PostList">
            <button onClick={getPosts}>Button</button>
            <div>
                {Posts?.map(x => <div key={x?.id}>id: {x?.id} | userId: {x?.userId}</div>)}
            </div>
        </div>
    );
}

export default PostList;