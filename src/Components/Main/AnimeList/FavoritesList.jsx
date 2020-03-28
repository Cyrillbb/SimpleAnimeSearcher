import React from 'react'
import AnimeCard from './AnimeCard'

export function Favorites(props) {
    return (
        <AnimeCard>
            <div>
                jkkdsljrtylkjt;lh
            <div>
                    {props.favArr.map((item) =>
                        <AnimeCard key={item.attributes.canonicalTitle + 'fav'}>
                            <h3>
                                <span className='favIcon'>
                                    <i className="fas fa-star" onClick={() => props.fav(item)}></i>
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
                            <p>
                                Synopsis: {item.attributes.synopsis}
                            </p>
                        </AnimeCard>
                    )}
                </div>
            </div>
        </AnimeCard>
    )
}