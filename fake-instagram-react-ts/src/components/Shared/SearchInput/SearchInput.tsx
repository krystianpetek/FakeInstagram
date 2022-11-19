import { FunctionComponent } from "react";
import "./SearchInput.scss";

interface SearchInputProps {
    id: string,
    placeholder: string,
    name: string,
    handleSetId: (event: React.ChangeEvent<HTMLInputElement>) => void,
    fetchData?: (event: React.KeyboardEvent<HTMLInputElement>) => Promise<void>
}
const SearchInput: FunctionComponent<SearchInputProps> = ({ id, handleSetId, fetchData, name, placeholder }) => {
    return (
        <input className="SearchInput"
            id={name}
            name={name}
            placeholder={placeholder}
            min="1"
            type="text"
            value={id}
            onChange={handleSetId}
            onKeyDown={fetchData} />
    );
}
export default SearchInput;