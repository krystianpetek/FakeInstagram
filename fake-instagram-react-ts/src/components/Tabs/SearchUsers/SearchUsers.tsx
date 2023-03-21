import React, { FunctionComponent, useState } from "react";
import "./SearchUsers.scss";
import { isNumber } from "../../../helpers/isNumber";
import UserInfo from "../../UserInfo/UserInfo";
import SearchInput from "../../Shared/SearchInput/SearchInput";
import IUserResponse from "../../../API/Response/IUserResponse";
import { IUserService } from "../../../API/services/UserService";

interface SearchUsersProps {
    userService: IUserService
}
const SearchUsers: FunctionComponent<SearchUsersProps> = ({ userService }) => {
    const [user, setUser] = useState<IUserResponse | null>(null)
    const [userId, setUserId] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSetUserId = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.length === 0 || isNumber(event.currentTarget.value))
            setUserId(event.currentTarget.value);
    }

    const fetchData = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && event.currentTarget.value.length > 0) {
            const response = await userService.GetUser(parseInt(userId))
            if (response) {
                setUser(response);
            }
            else {
                setUser(null);
            }
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