import { FunctionComponent, useContext, useState } from "react";
import "./UserInfo.scss";
import { MdHomeWork, MdPermIdentity, MdHome, MdEmail, MdPhone, MdWeb } from "react-icons/md";
import IUserResponse from "../../API/Response/IUserResponse";
import InputUserInfo from "../InputUserInfo/InputUserInfo";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";
import Button from "../Shared/Button/Button";

interface UserInfoProps {
    user: IUserResponse | null
}
const UserInfo: FunctionComponent<UserInfoProps> = ({ user }) => {
    const { setEmail, setUsername } = useContext<ILoginContext>(LoginContext)

    const [buttonLocked, setButtonLocked] = useState<boolean>(true);

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "email")
            setEmail(value);
        else if (name === "username")
            setUsername(value);

        setUserInfo(prevValue => {
            console.log(prevValue)

            let returnValue = (
                {
                    ...prevValue, [name]: [value],

                });

            if (Object.keys(prevValue.address).includes(e.target.name)) {
                returnValue.address = { ...returnValue.address, [name]: [value] }
            }
            if (Object.keys(prevValue.address).includes(e.target.name)) {
                returnValue.company = { ...returnValue.company, [name]: [value] }
            }
            return returnValue;
        })
    };

    const handleOnClick = () => {
        setButtonLocked(prevValue => !prevValue);
    }

    const [userInfo, setUserInfo] = useState<IUserResponse>(user!);

    return (
        <div className="UserInfo">
            <div className="UserInfo__Container">
                <MdPermIdentity />
                <div>
                    {buttonLocked ? <p>ID: {userInfo.id}</p> :
                        <InputUserInfo handleOnChange={handleOnChange} name="id" placeholder="ID: " type="text" value={userInfo.id} />}

                    {buttonLocked ? <p>Username: {userInfo.username}</p> :
                        <InputUserInfo handleOnChange={handleOnChange} readOnly name="username" placeholder="Username: " type="text" value={userInfo.username} />}

                    {buttonLocked ? <p>Name: {userInfo.name}</p> :
                        <InputUserInfo handleOnChange={handleOnChange} name="name" placeholder="Name: " type="text" value={userInfo.name} />}
                </div>
            </div>

            <div className="UserInfo__Container">
                <MdEmail />
                <div>
                    {buttonLocked ? <p>Email: {userInfo.email}</p> :
                        <InputUserInfo handleOnChange={handleOnChange} readOnly name="email" placeholder="Email: " type="text" value={userInfo.email} />}
                </div>
            </div>

            <div className="UserInfo__Container">
                <MdPhone />
                <div>
                    {buttonLocked ? <p>Phone: {userInfo.phone}</p> :
                        <InputUserInfo handleOnChange={handleOnChange} name="phone" placeholder="Phone: " type="text" value={userInfo.phone} />}
                </div>
            </div>

            <div className="UserInfo__Container">
                <MdHome />
                <div>
                    {buttonLocked ? <p>Zipcode: {userInfo.address.zipcode}</p> :
                        <InputUserInfo handleOnChange={handleOnChange} name="zipcode" placeholder="Zipcode: " type="text" value={userInfo.address.zipcode} />}
                    {buttonLocked ? <p>City: {userInfo.address.city}</p> :
                        <InputUserInfo handleOnChange={handleOnChange} name="city" placeholder="City: " type="text" value={userInfo.address.city} />}
                    {buttonLocked ? <p>Street: {userInfo.address.street}</p> :
                        <InputUserInfo handleOnChange={handleOnChange} name="street" placeholder="Street: " type="text" value={userInfo.address.street} />}
                    {buttonLocked ? <p>Suite: {userInfo.address.suite}</p> :
                        <InputUserInfo handleOnChange={handleOnChange} name="suite" placeholder="Suite: " type="text" value={userInfo.address.suite} />}
                    <p>Geo: {userInfo.address.geo.lat} | {userInfo.address.geo.lng}</p>
                </div>
            </div>

            <div className="UserInfo__Container">
                <MdHomeWork />
                <div>
                    <p>Company: {user?.company?.name}</p>
                    <p>{user?.company?.catchPhrase}</p>
                    <p>{user?.company?.bs}</p>
                </div>
            </div>
            <div className="UserInfo__Container">
                <MdWeb />
                <div>
                    {buttonLocked ? <p>Website: {userInfo.website}</p> :
                        <InputUserInfo handleOnChange={handleOnChange} name="website" placeholder="Website: " type="text" value={userInfo.website} />}
                </div>
            </div>
            <Button onClick={handleOnClick}>EDIT</Button>
        </div >
    );
}

export default UserInfo;