import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { urlConstructor, fetcher } from '../actions'
import Header from './Header/Header'
import { queryParts, sortTypes } from '../constants'
import { AnimeList } from './AnimeList/AnimeList'
import { Favorites } from './AnimeList/FavoritesList'

export class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: '',
            searchType: sortTypes.byPop,
            searchResults: [],
            favorites: [],
            favId: [],
            pgOffset: 0,
        }

    }

    componentDidMount() {
        if(localStorage.length > 0)    {
            let fuck = JSON.parse(localStorage.getItem('1'))
            this.setState({favorites: JSON.parse(localStorage.getItem('1')),
                            favId: JSON.parse(localStorage.getItem('2'))
        })
        }
        fetcher(urlConstructor(this.state))
            .then(data => this.setState({ searchResults: data }), console.log(this.state))                   
    }   

    componentDidUpdate() {
        if(this.state.favorites.length > 0) {
            localStorage.setItem('1', JSON.stringify(this.state.favorites))
            localStorage.setItem('2', JSON.stringify(this.state.favId))
        }
        console.log(this.state)
    }

    handleButtonSort = (event) => {
        this.setState(
            {
                searchType: event.target.value,
                searchInput: '',
                pgOffset: 0
            },
            () => {
                fetcher(urlConstructor(this.state))
                    .then(data => this.setState({ searchResults: data }))
            }
        )
    }

    handleSearch = (event) => {
        this.setState(
            {
                searchInput: event.target.value,
                pgOffset: 0
            },
            () => {
                fetcher(urlConstructor(this.state))
                    .then(data => this.setState({ searchResults: data }))
            }
        )
    }

    handleMore = () => {
        this.setState(
            { pgOffset: this.state.pgOffset + queryParts.resultsNum },
            () => {
                fetcher(urlConstructor(this.state))
                    .then(data => this.setState(
                        { searchResults: this.state.searchResults.concat(data) })
                    )
            }
        )
    }

    handleFav = (item) => { 
        localStorage.clear()      
        if (this.state.favorites.indexOf(item) === -1 && this.state.favId.indexOf(item.id) === -1) {
            this.setState({ 
                favorites: this.state.favorites.concat([item]),
                favId: this.state.favId.concat([item.id])
            })
        }
        else {
            let favCopy = this.state.favorites;
            let idCopy = this.state.favId;
            favCopy.splice(idCopy.indexOf(item.id), 1)
            idCopy.splice(idCopy.indexOf(item.id), 1)
            this.setState({ favorites: favCopy, favId: idCopy })
        }
    }

    render() {
        return (
            <Router>
                <Header sort={this.handleButtonSort} search={this.handleSearch} />
                <Switch>
                    <Route exact path='/'>
                        <AnimeList
                            animeArr={this.state.searchResults} more={this.handleMore} fav={this.handleFav}
                            favArr={this.state.favorites}
                            favId={this.state.favId}
                        />
                    </Route>
                    <Route exact path='/favorites'>
                        <Favorites favArr={this.state.favorites} fav={this.handleFav} />
                    </Route>
                </Switch>
            </Router>
        )
    }
}