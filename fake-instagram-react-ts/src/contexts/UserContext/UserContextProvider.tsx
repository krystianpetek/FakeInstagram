import { useEffect, useState } from "react";
import { IUser, IUserContext, UserContext } from "./UserContext";
import API from "./../../API/api";

interface UserContextProviderProps {
    children: JSX.Element;
}

export const UserContextProvider = (props: UserContextProviderProps) => {

    const [users, setUsers] = useState<Array<IUser>>([]);

    const handleSetUsers = (users: Array<IUser>) => {
        setUsers(users);
    }

    useEffect(() => {
        if (users.length < 10) {
            API.get(`users`)
                .then(response => response.data)
                .then(users => {
                    handleSetUsers(users);
                })
                .catch(error => {
                    console.log(error);
                    window.location.href = '/errorPage';
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
