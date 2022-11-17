import React, { FunctionComponent } from "react";
import Tabs from "../../components/Tabs/Tabs";
import "./Search.scss";

interface SearchProps { }
const Search: FunctionComponent<SearchProps> = () => {
    return (
        <div className="Search">
            <Tabs />
        </div>
    );
}

export default Search;