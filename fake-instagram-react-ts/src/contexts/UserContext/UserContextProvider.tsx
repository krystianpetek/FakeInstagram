import { useEffect, useState } from "react";
import { IUserContext, UserContext } from "./UserContext";
import UserService from "./../../API/services/UserService";
import IUserResponse from "../../API/Response/IUserResponse";

interface UserContextProviderProps {
    children: JSX.Element;
}

export const UserContextProvider = (props: UserContextProviderProps) => {

    const [users, setUsers] = useState<Array<IUserResponse>>([]);

    const handleSetUsers = (users: Array<IUserResponse>) => {
        setUsers(users);
    }

    useEffect(() => {
        if (users.length < 1) {
            UserService.GetUsers()
                .then(response => response.data)
                .then(users => {
                    handleSetUsers(users);
                })
                .catch(error => {
                    console.log(error);
                    // window.location.href = '/errorPage';
                })
        }
    }, []);

    const UserState: IUserContext = {
        users: users
    };

    return (
        <div className="App">
            <UserContext.Provider value={UserState}>
                {props.children}
            </UserContext.Provider>
        </div>
    );
};
