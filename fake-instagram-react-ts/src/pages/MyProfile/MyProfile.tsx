import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import "./MyProfile.scss";
import { Navigate } from "react-router-dom";
import UserInfo from "../../components/UserInfo/UserInfo";
import Post from "../../components/Post/Post";
import Button from "../../components/Shared/Button/Button";
import PhotoInfo from "../../components/PhotoInfo/PhotoInfo";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import { IUserContext, UserContext } from "../../contexts/UserContext/UserContext";
import { IPostContext, PostContext } from "../../contexts/PostContext/PostContext";
import IAlbumResponse from "../../API/Response/IAlbumResponse";
import IPhotoResponse from "../../API/Response/IPhotoResponse";
import IUserResponse from "../../API/Response/IUserResponse";
import UserService from "../../API/services/UserService";
import AlbumService from "../../API/services/AlbumService";
import { baseURL } from "../../API/baseURL";



interface MyProfileProps { }
const MyProfile: FunctionComponent<MyProfileProps> = () => {
    const { isUserLogged, email, username } = useContext<ILoginContext>(LoginContext)
    const { posts, comments } = useContext<IPostContext>(PostContext);
    const { users } = useContext<IUserContext>(UserContext);
    const myProfile: (IUserResponse | null) = users.find(user => user.email === email && user.username === username) ?? null;
    const [photos, setPhotos] = useState<IPhotoResponse[]>();
    const [albums, setAlbums] = useState<IAlbumResponse[]>();

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
    const myAlbums = albums?.map(album => (
        <div className="albums">
            <div>
                <p>ID: {album?.id}</p>
            </div>
            <div>
                <p>Title:{album?.title} </p>
            </div>
            <div>
                <Button key={album.id
                } onClick={() => getMyPhotosFromAlbum(album.id)}>{`Show album ${album.id}`}</Button>
            </div>
            <div className="photos">
                {photos?.filter(photo => photo.albumId === album.id)
                    .map(photo =>
                        <PhotoInfo key={photo.id} photo={photo} />)}
            </div>
        </div>

    ))

    const getMyAlbums = () => UserService.GetUserAlbums(myProfile!.id)
        .then<IAlbumResponse[]>(response => {
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("While fetching posts something went wrong!");
        })
        .then(response => setAlbums(response))
        .catch(error => {
            console.log(error);
        });

    const getMyPhotosFromAlbum = (albumId: number) => AlbumService.GetPhotosFromAlbum(albumId)
        .then<IPhotoResponse[]>(response => {
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("While fetching posts something went wrong!");
        })
        .then(response => setPhotos(response))
        .catch(error => {
            console.log(error);
        });

    useEffect(() => {
        getMyAlbums();
    }, [])

    return (
        <>
            {(!isUserLogged) ? <Navigate replace to={`${baseURL}/`}></Navigate> : ""}
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
                    <p className="MyProfile__Section__Title">My albums!</p>
                    <hr />
                    <div className="MyProfile__Section__Albums">{myAlbums}</div>
                </div>
            </div>
        </>
    );
}

export default MyProfile;