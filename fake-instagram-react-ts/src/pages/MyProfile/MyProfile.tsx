import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import "./MyProfile.scss";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { Navigate } from "react-router-dom";
import { PostsResponse } from "../Posts/Posts";
import API from "./../../API/api";
import { IUserContext, UserContext } from "../../contexts/UserContext/UserContext";

interface PhotosResponse {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface AlbumsResponse {
    userId: number,
    id: number,
    title: string
}

interface MyProfileProps { }
const MyProfile: FunctionComponent<MyProfileProps> = () => {
    const { isUserLogged, email } = useContext<ILoginContext>(LoginContext)

    const myProfile = useContext<IUserContext>(UserContext).users.find(user => user.email === email);

    const [MyPosts, setMyPosts] = useState<PostsResponse[]>();
    const mappedPosts = MyPosts?.map(post => (<li key={post.id}>{post.body}</li>))

    const [MyPhotos, setMyPhotos] = useState<PhotosResponse[]>();
    const mappedPhotos = MyPhotos?.map(post => (<li key={post.id}>PhotoID: {post.id}, AlbumId: {post.albumId} <img src={post.thumbnailUrl} alt="photo" /></li>))

    const [MyAlbums, setMyAlbums] = useState<AlbumsResponse[]>();
    const mappedAlbums = MyAlbums?.map(post => (
        <>
            <li key={post.id}>
                <button onClick={() => getMyPhotos(post.id)}>
                </button>
                {post.title}

            </li>
        </>))

    const getMyPosts = () => API.get(`users/${myProfile?.id}/posts`)
        .then<PostsResponse[]>(response => {
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("While fetching posts something went wrong!");
        })
        .then(response => setMyPosts(response))
        .catch(error => {
            console.log(error);
            window.location.href = '/errorPage';
        });

    const getMyAlbums = () => API.get(`users/${myProfile?.id}/albums`)
        .then<AlbumsResponse[]>(response => {
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("While fetching posts something went wrong!");
        })
        .then(response => setMyAlbums(response))
        .catch(error => {
            console.log(error);
            window.location.href = '/errorPage';
        });

    const getMyPhotos = (albumId: number) => API.get(`albums/${albumId}/photos`)
        .then<PhotosResponse[]>(response => {
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("While fetching posts something went wrong!");
        })
        .then(response => setMyPhotos(response))
        .catch(error => {
            console.log(error);
            window.location.href = '/errorPage';
        });

    useEffect(() => {
        getMyPosts();
        getMyAlbums();
    }, [])

    return (
        <>
            {(!isUserLogged) ? <Navigate replace to="/"></Navigate> : ""}
            <div className="MyProfile">
                <div className="MyProfile_Info">Hello <span>{email}LOGINContextProvider change!</span></div>
                <br />
                <div>My Profile</div>
                <div>
                    <li>ID: {myProfile?.id}</li>
                    <li>Name: {myProfile?.name}</li>
                    <li>Username: {myProfile?.username}</li>
                    <li>Email: {myProfile?.email}</li>
                    <li>Phone: {myProfile?.address.phone}</li>
                    <li>City: {myProfile?.address.zipcode} {myProfile?.address.city} {myProfile?.address.street}</li>
                    <li>Company: {myProfile?.address.company?.name} {myProfile?.address.company?.catchPhrase} {myProfile?.address.company?.name}</li>
                    <li>Geo: {myProfile?.address.geo.lat} {myProfile?.address.geo.lng}</li>
                    <li>Suite: {myProfile?.address.suite}</li>
                    <li>Website: {myProfile?.address.website}</li>
                </div>

                <br />
                <div>My posts</div>
                <div>{mappedPosts}</div>

                <br />
                <div>My albums</div>
                <div>{mappedAlbums}</div>

                <div>My photos</div>
                {mappedPhotos}
            </div>
        </>
    );
}

export default MyProfile;