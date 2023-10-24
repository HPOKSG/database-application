import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Searchbar.css'
import React, { useRef, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Searchbar({placeholder,handleSearch}) {
    const inputValue = useRef("");

    return (
       <div className='search-bar'>
            <input ref={inputValue}
                type='text' 
                placeholder={placeholder}>
            </input>
            <div className='search-button' onClick={()=>{handleSearch(inputValue.current.value)}}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size='1x'/>
            </div>
       </div>
    );
}

export default Searchbar;
