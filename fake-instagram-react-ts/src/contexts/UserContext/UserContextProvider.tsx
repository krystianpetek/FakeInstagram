import { FC, useEffect, useState } from "react";
import { IUserContext, UserContext } from "./UserContext";
import { IUserService } from "./../../API/services/UserService";
import IUserResponse from "../../API/Response/IUserResponse";

interface UserContextProviderProps {
    children: JSX.Element;
    userService: IUserService
}
export const UserContextProvider: FC<UserContextProviderProps> = ({ children, userService }) => {

    const [users, setUsers] = useState<Array<IUserResponse>>([]);

    useEffect(() => {

        const fetchUsers = async () => {
            if (users.length < 1) {
                const users = await userService.GetUsers();
                setUsers(users);
            }
        }
        fetchUsers();
    }, []);

    const UserState: IUserContext = {
        users: users,
        setUsers: setUsers
    };

    return (
        <div className="App">
            <UserContext.Provider value={UserState}>
                {children}
            </UserContext.Provider>
        </div>
    );
};
