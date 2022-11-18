import React, { FunctionComponent } from "react";
import "./Search.scss";
import Tabs from "../../components/Tabs/Tabs";

interface SearchProps { }
const Search: FunctionComponent<SearchProps> = () => {
    return (
        <div className="Search">
            <Tabs />
        </div>
    );
}

export default Search;