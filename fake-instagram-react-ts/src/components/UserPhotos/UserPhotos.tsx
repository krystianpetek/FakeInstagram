import { FunctionComponent, useContext, useEffect, useState } from "react";
import "./UserPhotos.scss";
import PhotoInfo from "../PhotoInfo/PhotoInfo";
import Button from "../Shared/Button/Button";
import SearchInput from "../Shared/SearchInput/SearchInput";
import { IUserContext, UserContext } from "../../contexts/UserContext/UserContext";
import IPhotoResponse from "../../API/Response/IPhotoResponse";
import IAlbumResponse from "../../API/Response/IAlbumResponse";
import AlbumService from "../../API/services/AlbumService";

interface UserPhotosProps {
    photos: Array<IPhotoResponse> | null,
    lastPhoto?: number,
    handleSetLastPhoto: (number?: number) => void,
}
const UserPhotos: FunctionComponent<UserPhotosProps> = ({ photos, lastPhoto, handleSetLastPhoto }) => {
    const { users } = useContext<IUserContext>(UserContext);
    const [albums, setAlbums] = useState<IAlbumResponse[] | null>()
    const [username, setUsername] = useState<string>("");
    const [filterPhotos, setFilterPhotos] = useState<Array<IPhotoResponse> | null>(photos); // i did it in memory without saving between entered letters

    const handleSetUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        setUsername(event.currentTarget.value);
        const filtered = users
            .filter(user => user.username.toLowerCase()
                .includes(event.currentTarget.value.toLowerCase()));
        // setFilterUsers(filtered); // i did it in memory without saving between entered letters
        handleSetLastPhoto(0);

        const filterAlbums = albums?.filter(album => {
            return filtered.find(x => x.id === album.userId);
        })

        const filterPhotos = photos?.filter(photo => {
            return filterAlbums?.find(x => x.id === photo.albumId);
        })
        setFilterPhotos(filterPhotos!);
    };

    const fetchData = async () => {
        await AlbumService.GetAlbums()
            .then<IAlbumResponse[]>(response => response.data)
            .then(album => {
                setAlbums(album);
            })
            .catch(error => {
                console.log(error);
                setAlbums(null);
            });
    };

    useEffect(() => { fetchData() }, [])
    return (
        <div className="UserPhotos">
            <SearchInput
                name="searchUser"
                id={username}
                placeholder="Please type username letters"
                handleSetId={handleSetUsername}
            />

            < div className="button" >
                <Button onClick={handleSetLastPhoto}>Load more...</Button>
            </div >

            <div>
                <div className="searchResult">
                    <p>{`Search result for all usernames which contains letters: ${username}`}</p>
                    <p>Number of results: {`${filterPhotos?.length}`} photos.</p>
                </div>
            </div>       <div className="photo">
                {filterPhotos?.filter(photo => photo)
                    .slice(0, lastPhoto)
                    .map(photo => {
                        return <PhotoInfo photo={photo} key={photo.id} />
                    })
                }
            </div>
        </div >
    );
}

export default UserPhotos;