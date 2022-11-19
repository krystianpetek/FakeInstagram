import { FunctionComponent } from "react";
import IPhotoResponse from "../../API/Response/IPhotoResponse";
import PhotoInfo from "../PhotoInfo/PhotoInfo";
import Button from "../Shared/Button/Button";
import "./AllPhotos.scss";

interface AllPhotosProps {
    photos?: Array<IPhotoResponse> | null,
    lastPhoto?: number,
    handleSetLastPhoto: () => void,
}
const AllPhotos: FunctionComponent<AllPhotosProps> = ({ photos, lastPhoto, handleSetLastPhoto }) => {
    return (
        <div className="AllPhotos">
            < div className="button" >
                <Button onClick={handleSetLastPhoto}>Load more...</Button>
            </div >

            <div className="photo">
                {photos?.slice(0, lastPhoto)
                    .map(photo => {
                        return <PhotoInfo photo={photo} key={photo.id} />
                    })
                }
            </div>
        </div>
    );
}

export default AllPhotos;