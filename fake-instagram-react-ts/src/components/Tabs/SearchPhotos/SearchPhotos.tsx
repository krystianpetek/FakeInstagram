import { FunctionComponent } from "react";

interface SearchPhotosProps { }
const SearchPhotos: FunctionComponent<SearchPhotosProps> = () => {
    return (
        <div className="SearchPhotos">
            <p>Search photos</p>
        </div>
    );
}

export default SearchPhotos;