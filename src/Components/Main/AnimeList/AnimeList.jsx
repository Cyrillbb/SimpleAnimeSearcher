import React from 'react'
import AnimeCard from './AnimeCard'
import './List.css'
import PropTypes from 'prop-types'

export function AnimeList(props) {    

    return (
        <div style={{ backgroundColor: '#000000' }}>
            <div className='list'>
                {props.animeArr.map((item) =>
                    <AnimeCard key={item.id} id={item.id}>
                        <h3 className='cardH'>
                            <span className='favIcon'>
                                {props.favId.indexOf(item.id) === -1 ?
                                    <i style={{ color: '#FF851B' }} className="far fa-star" onClick={() => { props.fav(item) }}></i>
                                    : <i style={{ color: '#FF851B' }} className="fas fa-star" onClick={() => { props.fav(item) }}></i>
                                }
                            </span>
                                Title: {item.attributes.canonicalTitle}
                        </h3>
                        <p>
                            Avrage Rating:   {item.attributes.averageRating}
                        </p>
                        <p>
                            Popularity rank: {item.attributes.popularityRank}
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
            <button onClick={props.more}>Show more</button>
        </div>



    )
}

AnimeList.propTypes = {
    animeArr: PropTypes.array,
    more: PropTypes.func,
    favId: PropTypes.array,
}