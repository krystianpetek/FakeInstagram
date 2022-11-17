import { FunctionComponent } from "react";

interface SearchUsersProps { }
const SearchUsers: FunctionComponent<SearchUsersProps> = () => {
    return (
        <div className="SearchUsers">
            <p>Search users</p>
        </div>
    );
}

export default SearchUsers;