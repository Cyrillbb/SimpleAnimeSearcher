import React from 'react'
import { Link } from 'react-router-dom'

export function SearchBar(props) {
    return (
        <div>
            <input type="text" defaultValue='Search anime' onChange={props.search} />
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
        </div>
    )
}