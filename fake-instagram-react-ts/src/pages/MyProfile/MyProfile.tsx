import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import "./MyProfile.scss";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { Navigate } from "react-router-dom";
import API from "./../../API/api";
import { IUserContext, UserContext } from "../../contexts/UserContext/UserContext";
import { IPostResponse } from "../../API/IPostResponse";
import { IAlbumResponse } from "../../API/IAlbumResponse";
import { IPhotoResponse } from "../../API/IPhotoResponse";

interface MyProfileProps { }
const MyProfile: FunctionComponent<MyProfileProps> = () => {
    const { isUserLogged, email } = useContext<ILoginContext>(LoginContext)

    const myProfile = useContext<IUserContext>(UserContext).users.find(user => user.email === email);

    const [MyPosts, setMyPosts] = useState<IPostResponse[]>();
    const mappedPosts = MyPosts?.map(post => (<li key={post.id}>{post.body}</li>))

    const [MyPhotos, setMyPhotos] = useState<IPhotoResponse[]>();
    const mappedPhotos = MyPhotos?.map(post => (<li key={post.id}>PhotoID: {post.id}, AlbumId: {post.albumId} <img src={post.thumbnailUrl} alt="thumbnailPhoto" /></li>))

    const [MyAlbums, setMyAlbums] = useState<IAlbumResponse[]>();
    const mappedAlbums = MyAlbums?.map(post => (
        <>
            <li key={post.id}>
                <button onClick={() => getMyPhotos(post.id)}>
                </button>
                {post.title}

            </li>
        </>))

    const getMyPosts = () => API.get(`users/${myProfile?.id}/posts`)
        .then<IPostResponse[]>(response => {
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
        .then<IAlbumResponse[]>(response => {
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
        .then<IPhotoResponse[]>(response => {
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