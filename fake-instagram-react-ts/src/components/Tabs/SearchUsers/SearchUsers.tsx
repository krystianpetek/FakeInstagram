import React, { FunctionComponent, useState } from "react";
import IUserResponse from "../../../API/IUserResponse";
import UserService from "../../../API/services/UserService";
import { isNumber } from "../../../Helpers/isNumber";
import SearchInput from "../../Shared/SearchInput/SearchInput";
import UserInfo from "../../UserInfo/UserInfo";
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
            await UserService.GetUser(parseInt(userId))
                .then<IUserResponse>(response => response.data)
                .then(posts => {
                    setUser(posts);
                })
                .catch(error => {
                    console.log(error);
                    setUser(null);
                })
            setMessage("User not found!");
        }
    }

    return (
        <div className="SearchUsers">
            <SearchInput
                name="searchUser"
                id={userId}
                placeholder="Please enter user id and press enter"
                handleSetId={handleSetUserId}
                fetchData={fetchData}
            />
            <div className="SearchUsers__Info">
                {!user ? <p className="SearchUsers__Info__Message">{message}</p> : <UserInfo user={user} />}
            </div>
        </div>
    );
}

export default SearchUsers;