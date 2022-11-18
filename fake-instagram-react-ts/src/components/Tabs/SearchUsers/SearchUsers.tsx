import React, { FunctionComponent, useState } from "react";
import IUserResponse from "../../../API/IUserResponse";
import UserService from "../../../API/services/UserService";
import { isNumber } from "../../../Helpers/isNumber";
import "./SearchUsers.scss";

interface SearchUsersProps { }
const SearchUsers: FunctionComponent<SearchUsersProps> = () => {
    const [user, setUser] = useState<IUserResponse | null>(null)
    const [userId, setUserId] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSetUserId = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.length === 0 || isNumber(event.currentTarget.value))
            setUserId(event.currentTarget.value);
    }

    const fetchData = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && event.currentTarget.value.length > 0) {
            setMessage("User not found!");
            await UserService.GetUser(parseInt(userId))
                .then<IUserResponse>(response => response.data)
                .then(posts => {
                    setUser(posts);

                })
                .catch(error => {
                    console.log(error);
                    setUser(null);
                })
        }
    }

    return (
        <div className="SearchUsers">
            <p>Please </p>
            <input
                id="searchUser"
                name="searchUser"
                placeholder="Please enter user id and press enter"
                min="1"
                type="text"
                value={userId!}
                onChange={handleSetUserId}
                onKeyDown={fetchData} />
            <div className="SearchUsers__Info">

                {!user ? message :
                    <>
                        <p>
                            {user.id}
                        </p>
                        <p>
                            {user.name}
                        </p>
                        <p>
                            {user.username}
                        </p>
                        <p>
                            {user.email}
                        </p>
                        <p>
                            {user.address.city}
                        </p>
                    </>}
            </div>
        </div>
    );
}

export default SearchUsers;