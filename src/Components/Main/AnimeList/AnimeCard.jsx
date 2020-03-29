import React from 'react'
import './Card.css'

function AnimeCard(props) {

    const handleGrow = (event) => {
        if(event.target.parentElement.className === 'card') {
            event.target.parentElement.className = 'cardGrow'
            event.target.innerText = 'Hide'
            document.getElementById(event.target.parentElement.id + 'desc').className = 'desc'
        }
        else if(event.target.parentElement.className === 'cardGrow') {
            event.target.parentElement.className = 'card'
            event.target.innerText = 'More info'
            document.getElementById(event.target.parentElement.id + 'desc').className = 'descHide'
        }
    }

    return (
        <div className='card' id={props.id}>
            {props.children}
            <button className='cardButton' onClick={handleGrow}>More info</button>
        </div>
    )
}

export default AnimeCard