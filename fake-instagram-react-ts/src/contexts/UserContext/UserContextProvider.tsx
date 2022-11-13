import { useEffect, useState } from "react";
import { IUser, IUserContext, UserContext } from "./UserContext";

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
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(usersArr => {
                    handleSetUsers(usersArr);
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
