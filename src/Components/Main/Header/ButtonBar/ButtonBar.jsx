import React from 'react'
import { sortTypes } from '../../../constants'
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
        </div>
    )
}

export default ButtonBar