import { FunctionComponent } from "react";
import "./AlbumInfo.scss";
import PhotoInfo from "../PhotoInfo/PhotoInfo";
import IAlbumResponse from "../../API/Response/IAlbumResponse";
import IPhotoResponse from "../../API/Response/IPhotoResponse";
import { MdPermIdentity, MdTitle } from "react-icons/md";

interface AlbumInfoProps {
    album: IAlbumResponse | null,
    albumPhotos: Array<IPhotoResponse> | null,
}
const AlbumInfo: FunctionComponent<AlbumInfoProps> = ({ album, albumPhotos }) => {
    const photos = albumPhotos?.map(photo => (<><hr /><PhotoInfo key={photo.id} photo={photo} /></>));

    return (
        <div className="AlbumInfo">
            <div>
                <MdPermIdentity />
                <div>
                    <p>ID: {album?.id}</p>
                    <p>UserID: {album?.userId}</p>
                </div>
            </div>
            <div>
                <MdTitle />
                <div>
                    {album?.title}
                </div>
            </div>
            <div className="photos">
                {photos}
            </div>
        </div>
    );
}

export default AlbumInfo;