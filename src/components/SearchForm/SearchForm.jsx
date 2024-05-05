import React, {useState} from "react";
import './SearchForm.css'

const SearchForm = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = () => {
        onSearch(searchTerm)
    }

    return (
        <div className="search-form">
            <input
                type={"text"}
                placeholder="Поиск по названию или региону"
                value={searchTerm}
                onChange={handleInputChange}/>
            <button onClick={handleSearch}>Искать</button>
        </div>
    )
}

export default SearchForm
