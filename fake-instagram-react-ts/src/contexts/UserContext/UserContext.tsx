import { createContext } from "react";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
        phone: string;
        website: string;
        company: {
            name: string;
            catchPhrase: string;
            bs: string;
        }
    }
}
export interface IUserContext {
    users: Array<IUser>
}

const defaultContextState: IUserContext = {
    users: []
}

export const UserContext: React.Context<IUserContext> = createContext(defaultContextState);