import { FunctionComponent } from "react";
import "./UserInfo.scss";
import IUserResponse from "../../API/IUserResponse";
import { MdHomeWork, MdPermIdentity, MdHome, MdEmail, MdPhone, MdWeb } from "react-icons/md";

interface UserInfoProps {
    user: IUserResponse | null
}
const UserInfo: FunctionComponent<UserInfoProps> = ({ user }) => {
    return (
        <div className="UserInfo">
            <div>
                <MdPermIdentity />
                <div>
                    <p>ID: {user?.id}</p>
                    <p>Username: {user?.username}</p>
                    <p>Name: {user?.name}</p>
                </div>
            </div>

            <div>
                <MdEmail />
                <div>
                    <p>Email: {user?.email}</p>
                </div>
            </div>

            <div>
                <MdPhone />
                <div>
                    <p>Phone: {user?.phone}</p>
                </div>
            </div>

            <div>
                <MdHome />
                <div>
                    <p>Zipcode: {user?.address.zipcode}</p>
                    <p>City: {user?.address.city}</p>
                    <p>Street: {user?.address.street}</p>
                    <p>Suite: {user?.address.suite}</p>
                    <p>Geo: {user?.address.geo.lat} | {user?.address.geo.lng}</p>
                </div>
            </div>

            <div>
                <MdHomeWork />
                <div>
                    <p>Zipcode: {user?.address.zipcode}</p>
                    <p>City: {user?.address.city}</p>
                    <p>Street: {user?.address.street}</p>
                    <p>Suite: {user?.address.suite}</p>
                    <p>Geo: {user?.address.geo.lat} | {user?.address.geo.lng}</p>
                </div>
            </div>

            <div>
                <MdHomeWork />
                <div>
                    <p>Company: {user?.company?.name}</p>
                    <p>{user?.company?.catchPhrase}</p>
                    <p>{user?.company?.bs}</p>
                </div>
            </div>
            <div>
                <MdWeb />
                <div>
                    <p>Website: {user?.website}</p>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;