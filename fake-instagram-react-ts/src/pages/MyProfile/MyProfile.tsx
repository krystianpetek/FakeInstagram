import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import "./MyProfile.scss";
import { Navigate } from "react-router-dom";
import UserInfo from "../../components/UserInfo/UserInfo";
import Post from "../../components/Post/Post";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { IUserContext, UserContext } from "../../contexts/UserContext/UserContext";
import { IPostContext, PostContext } from "../../contexts/PostContext/PostContext";
import IAlbumResponse from "../../API/Response/IAlbumResponse";
import IPhotoResponse from "../../API/Response/IPhotoResponse";
import IUserResponse from "../../API/Response/IUserResponse";
import UserService from "../../API/services/UserService";
import AlbumService from "../../API/services/AlbumService";


interface MyProfileProps { }
const MyProfile: FunctionComponent<MyProfileProps> = () => {
    const { isUserLogged, email, username } = useContext<ILoginContext>(LoginContext)
    const { posts, comments } = useContext<IPostContext>(PostContext);
    const { users } = useContext<IUserContext>(UserContext);
    const myProfile: (IUserResponse | null) = users.find(user => user.email === email && user.username === username) ?? null;

    const myPosts = posts
        .filter(post => post.userId === myProfile?.id)
        .map(post => {
            const postComments = comments.filter(comment => comment.postId === post.id);
            return (
                <Post
                    key={post.id}
                    post={post}
                    comments={postComments}
                ></Post>
            )
        });

    const [MyPhotos, setMyPhotos] = useState<IPhotoResponse[]>();
    const mappedPhotos = MyPhotos?.map(post => (<li key={post.id}>PhotoID: {post.id}, AlbumId: {post.albumId} <img src={post.thumbnailUrl} alt="thumbnailPhoto" /></li>))

    const [MyAlbums, setMyAlbums] = useState<IAlbumResponse[]>();
    const mappedAlbums = MyAlbums?.map(post => (
        <>
            <li key={post.id}>
                <button onClick={() => getMyPhotosFromAlbum(post.id)}>
                </button>
                {post.title}

            </li>
        </>))

    const getMyAlbums = () => UserService.GetUserAlbums(myProfile!.id)
        .then<IAlbumResponse[]>(response => {
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("While fetching posts something went wrong!");
        })
        .then(response => setMyAlbums(response))
        .catch(error => {
            console.log(error);
            // window.location.href = '/errorPage';
        });

    const getMyPhotosFromAlbum = (albumId: number) => AlbumService.GetPhotosFromAlbum(albumId)
        .then<IPhotoResponse[]>(response => {
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("While fetching posts something went wrong!");
        })
        .then(response => setMyPhotos(response))
        .catch(error => {
            console.log(error);
            // window.location.href = '/errorPage';
        });

    useEffect(() => {
        getMyAlbums();
    }, [])

    return (
        <>
            {(!isUserLogged) ? <Navigate replace to="/"></Navigate> : ""}
            <div className="MyProfile">
                <div className="MyProfile__Section">
                    <p className="MyProfile__Section__Title">About me!</p>
                    <hr />
                    <UserInfo user={myProfile}></UserInfo>
                </div>

                <div className="MyProfile__Section">
                    <p className="MyProfile__Section__Title">My posts!</p>
                    <hr />
                    <div>{myPosts}</div>
                </div>

                <div className="MyProfile__Section">
                    <p className="MyProfile__Section__Title">My photos</p>
                    <hr />
                    <div>{mappedPhotos}</div>
                </div>
            </div>
        </>
    );
}

export default MyProfile;