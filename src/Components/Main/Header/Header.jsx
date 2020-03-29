import React from 'react'
import ButtonBar from './ButtonBar/ButtonBar'
import { SearchBar } from './SearchBar/SearchBar'
import './Header.css'

function Header(props) {
    return (
        <div className='header'>
            <SearchBar search={props.search} />
            <ButtonBar sort={props.sort} />
        </div>
    )
}

export default Header