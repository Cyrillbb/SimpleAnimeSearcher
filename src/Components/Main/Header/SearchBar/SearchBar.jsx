import React from 'react'
import { Link } from 'react-router-dom'
import './SearchBar.css'

export function SearchBar(props) {
    return (
        <div className='searchBar'>
            <input className='input' type="text" placeholder='Search anime' onChange={props.search} />
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/favorites'>Favorites</Link>
        </div>
    )
}