import { FunctionComponent, useState } from "react";
import "./SearchAlbums.scss";
import { isNumber } from "../../../helpers/isNumber";
import AlbumInfo from "../../AlbumInfo/AlbumInfo";
import SearchInput from "../../Shared/SearchInput/SearchInput";
import IAlbumResponse from "../../../API/Response/IAlbumResponse";
import IPhotoResponse from "../../../API/Response/IPhotoResponse";
import AlbumService from "../../../API/services/AlbumService";

interface SearchAlbumsProps { }
const SearchAlbums: FunctionComponent<SearchAlbumsProps> = () => {
    const [album, setAlbum] = useState<IAlbumResponse | null>(null);
    const [albumPhotos, setAlbumPhotos] = useState<Array<IPhotoResponse> | null>(null);
    const [albumId, setAlbumId] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSetAlbumId = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.length === 0 || isNumber(event.currentTarget.value))
            setAlbumId(event.currentTarget.value);
    };

    const fetchData = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && event.currentTarget.value.length > 0) {
            await AlbumService.GetAlbum(parseInt(albumId))
                .then<IAlbumResponse>(response => response.data)
                .then(album => {
                    setAlbum(album);
                })
                .catch(error => {
                    console.log(error);
                    setAlbum(null);
                });
            if (albumId) {
                await AlbumService.GetPhotosFromAlbum(parseInt(albumId))
                    .then<IPhotoResponse[]>(response => response.data)
                    .then(photos => {
                        setAlbumPhotos(photos);
                    })
                    .catch(error => {
                        console.log(error);
                        setAlbum(null);
                    });
            }
            setMessage("Album not found!");
        }
    };

    return (
        <div className="SearchAlbums">
            <SearchInput
                name="searchAlbum"
                id={albumId}
                placeholder="Please enter album id and press enter"
                fetchData={fetchData}
                handleSetId={handleSetAlbumId}
            />
            <div className="SearchAlbums__Info">
                {!album ? <p className="SearchAlbums__Info__Message">{message}</p> : <AlbumInfo albumPhotos={albumPhotos} album={album} />}
            </div>
        </div>
    );
};
export default SearchAlbums;