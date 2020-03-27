import React from 'react'

export function SearchBar(props) {
    return (
        <input type="text" defaultValue='Search anime' onChange={props.search} />
    )
}