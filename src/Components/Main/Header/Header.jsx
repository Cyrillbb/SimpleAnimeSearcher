import React from 'react'
import ButtonBar from './ButtonBar/ButtonBar'
import { SearchBar } from './SearchBar/SearchBar'

function Header(props) {
    return (
        <div>
            <SearchBar search={props.search} />
            <ButtonBar sort={props.sort} />
        </div>
    )
}

export default Header