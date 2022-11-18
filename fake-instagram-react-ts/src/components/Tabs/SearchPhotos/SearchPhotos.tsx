import { FunctionComponent, useState } from "react";
import IPhotoResponse from "../../../API/IPhotoResponse";
import PhotoService from "../../../API/services/PhotoService";
import { isNumber } from "../../../Helpers/isNumber";
import "./SearchPhotos.scss";

interface SearchPhotosProps { }
const SearchPhotos: FunctionComponent<SearchPhotosProps> = () => {
    const [message, setMessage] = useState<string>("");
    const [photoId, setPhotoId] = useState<string>("");
    const [photo, setPhoto] = useState<IPhotoResponse | null>(null);

    const handleSetPhotoId = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.length === 0 || isNumber(event.currentTarget.value))
            setPhotoId(event.currentTarget.value);
    };

    const fetchData = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && event.currentTarget.value.length > 0) {
            setMessage("User not found!");
            await PhotoService.GetPhoto(parseInt(photoId))
                .then<IPhotoResponse>(response => response.data)
                .then(photo => {
                    setPhoto(photo);
                })
                .catch(error => {
                    console.log(error);
                    setPhoto(null);
                })
        }
    };

    return (
        <div className="SearchPhotos">
            <input className="SearchPhotos__Search"
                id="searchPhoto"
                name="searchPhoto"
                placeholder="Please enter photo id and press enter"
                min="1"
                type="text"
                value={photoId!}
                onChange={handleSetPhotoId}
                onKeyDown={fetchData} />
            <div className="SearchPhotos__Info">
                {!photo ? <p className="SearchUsers__Info__Message">{message}</p> : <>
                    {photo.thumbnailUrl}</>}
            </div>
        </div>
    );
};
export default SearchPhotos;