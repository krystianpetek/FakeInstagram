import "./Posts.scss";
import { useState, FunctionComponent, useEffect } from "react";
import Post from "../../components/Post/Post";
import IPostResponse from "../../API/IPostResponse";
import PostService from "../../API/services/PostService";

interface PostsProps { }
const PostList: FunctionComponent<PostsProps> = () => {

    const getPosts = () => PostService
        .GetPosts()
        .then<IPostResponse[]>(response => {
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("While fetching posts something went wrong!");
        })
        .then(response => setPosts(response))
        .catch(error => {
            console.log(error);
            window.location.href = '/errorPage';
        });

    const [Posts, setPosts] = useState<Partial<IPostResponse[]>>();

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