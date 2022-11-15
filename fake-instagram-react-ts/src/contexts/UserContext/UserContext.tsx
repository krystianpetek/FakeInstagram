import { createContext } from "react";
import { IUserResponse } from "../../API/IUserResponse";

export interface IUserContext {
    users: Array<IUserResponse>
}

const defaultContextState: IUserContext = {
    users: []
}

export const UserContext: React.Context<IUserContext> = createContext(defaultContextState);