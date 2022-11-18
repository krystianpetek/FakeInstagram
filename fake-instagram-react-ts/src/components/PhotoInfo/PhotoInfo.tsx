import { FunctionComponent } from "react";
import "./PhotoInfo.scss";
import IPhotoResponse from "../../API/IPhotoResponse";
import { MdPermIdentity, MdTitle } from "react-icons/md";
import { CgMinimizeAlt, CgMaximizeAlt } from "react-icons/cg";

interface PhotoInfoProps {
    photo: IPhotoResponse | null
}
const PhotoInfo: FunctionComponent<PhotoInfoProps> = ({ photo }) => {
    return (
        <div className="PhotoInfo">
            <div>
                <MdPermIdentity />
                <div>
                    <p>ID: {photo?.id}</p>
                    <p>AlbumId: {photo?.albumId}</p>
                </div>
            </div>

            <div>
                <MdTitle />
                <div>
                    {photo?.title}
                </div>
            </div>

            <div>
                <CgMinimizeAlt />
                <div>
                    {photo?.thumbnailUrl}
                </div>
            </div>

            <div>
                <CgMaximizeAlt />
                <div>
                    {<img className={"photoImage"} src={photo?.url} alt={photo?.title} />}
                </div>
            </div>
        </div>
    );
}

export default PhotoInfo;