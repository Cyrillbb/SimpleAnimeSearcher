import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

export function Categories(props) {
    return (
        <div className='categories'>
            <div className='catHead'>
                Categories
            </div>
            <div className='categoriesList'>
                {props.categories.map(item => <li><Link
                    to='/SimpleAnimeSearcher'
                    className='catLink'
                    key={item.id}
                    onClick={() => { props.catSearch(item.attributes.title) }}>
                    {item.attributes.title}
                </Link></li>)}
            </div>
        </div>
    )
}