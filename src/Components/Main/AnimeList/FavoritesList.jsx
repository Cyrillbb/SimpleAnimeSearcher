import React from 'react'
import AnimeCard from './AnimeCard'
import './List.css'
import PropTypes from 'prop-types'

export function Favorites(props) {
    return (        
            <div className='list'>
                {props.favArr.map((item) =>
                    <AnimeCard key={item.attributes.canonicalTitle + 'fav'} id={item.id}>
                        <h3>
                            <span className='favIcon'>
                                <i style={{color: '#FF851B'}} className="fas fa-star" onClick={() => props.fav(item)}></i>
                            </span>
                            Title: {item.attributes.canonicalTitle}
                        </h3>
                        <p>
                            Avrage Rating:   {item.attributes.averageRating}
                        </p>
                        <p>
                            Age rating: {item.attributes.ageRating}
                        </p>
                        <p>
                            Number of episodes: {item.attributes.episodeCount}
                        </p>
                        <p>
                            Status: {item.attributes.status}
                        </p>
                        <img className='img' src={item.attributes.posterImage.medium} alt="" />
                        <p className='descHide' id={item.id + 'desc'}>
                            Synopsis: {item.attributes.synopsis}
                        </p> 
                    </AnimeCard>
                )}
            </div>        

    )
}

AnimeCard.propTypes = {
    favArr: PropTypes.array
}