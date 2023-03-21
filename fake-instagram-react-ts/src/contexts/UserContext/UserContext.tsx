import { createContext } from "react";
import IUserResponse from "../../API/Response/IUserResponse";

export interface IUserContext {
    users: Array<IUserResponse>,
    setUsers: (users: IUserResponse[]) => void
}

const defaultContextState: IUserContext = {
    users: [],
    setUsers: () => { }
}

export const UserContext: React.Context<IUserContext> = createContext(defaultContextState);