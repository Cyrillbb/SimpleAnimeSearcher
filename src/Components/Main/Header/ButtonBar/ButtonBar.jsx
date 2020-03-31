import React from 'react'
import { sortTypes } from '../../../constants'
import { Link } from 'react-router-dom'
import './buttonBar.css'

function ButtonBar(props) {
    return (
        <div className='buttonBar'>
            <button value={sortTypes.byRating} onClick={props.sort}>
                Top rated
            </button>
            <button value={sortTypes.byPop} onClick={props.sort}>
                Most popular
            </button>
            <button value={sortTypes.byTopAir} onClick={props.sort}>
                Top Airing
            </button>
            <Link className='linkButton' to='/SimpleAnimeSearcher/categories'>
                Categories
            </Link>
        </div>
    )
}

export default ButtonBar