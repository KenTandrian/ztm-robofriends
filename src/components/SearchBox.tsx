import React from "react";

interface SearchBoxProps {
    searchField?: string;
    searchChange: React.ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({ searchField, searchChange }: SearchBoxProps) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search Robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;