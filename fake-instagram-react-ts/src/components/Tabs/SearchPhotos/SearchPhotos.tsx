import { FunctionComponent, useState } from "react";
import "./SearchPhotos.scss";
import { isNumber } from "../../../Helpers/isNumber";
import SearchInput from "../../Shared/SearchInput/SearchInput";
import PhotoInfo from "../../PhotoInfo/PhotoInfo";
import IPhotoResponse from "../../../API/Response/IPhotoResponse";
import PhotoService from "../../../API/services/PhotoService";

interface SearchPhotosProps { }
const SearchPhotos: FunctionComponent<SearchPhotosProps> = () => {
    const [photo, setPhoto] = useState<IPhotoResponse | null>(null);
    const [photoId, setPhotoId] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSetPhotoId = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.length === 0 || isNumber(event.currentTarget.value))
            setPhotoId(event.currentTarget.value);
    };

    const fetchData = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && event.currentTarget.value.length > 0) {
            await PhotoService.GetPhoto(parseInt(photoId))
                .then<IPhotoResponse>(response => response.data)
                .then(photo => {
                    setPhoto(photo);
                })
                .catch(error => {
                    console.log(error);
                    setPhoto(null);
                })
            setMessage("Photo not found!");
        }
    };

    return (
        <div className="SearchPhotos">
            <SearchInput
                name="searchPhoto"
                id={photoId}
                placeholder="Please enter photo id and press enter"
                fetchData={fetchData}
                handleSetId={handleSetPhotoId}
            />
            <div className="SearchPhotos__Info">
                {!photo ? <p className="SearchPhotos__Info__Message">{message}</p> : <PhotoInfo photo={photo} />}
            </div>
        </div>
    );
};
export default SearchPhotos;