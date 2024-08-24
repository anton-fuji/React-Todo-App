import React, {useState} from "react";

export const Search = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="search">
            <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Tasks..."
            />
            <button onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    );
};

export default Search