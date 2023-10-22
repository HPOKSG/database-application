import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Searchbar.css'
import React, { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Searchbar(props) {
    // const [searchTerm, setSearchTerm] = useState('');

    // const handleInputChange = (event) => {
    //     setSearchTerm(event.target.value);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     props.onSearch(searchTerm);
    // };

    return (
       <div className='search-bar'>
            <input 
                type='text' 
                placeholder='Search Inventory...'>
            </input>
            <search className='search-button'>
                <FontAwesomeIcon icon={faMagnifyingGlass} size='1x'/>
            </search>
       </div>
    );
}

export default Searchbar;
