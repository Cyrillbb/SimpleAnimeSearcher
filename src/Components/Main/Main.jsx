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
import _, { debounce } from 'lodash';

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
        if (localStorage.length > 0) {
            this.setState({
                favorites: JSON.parse(localStorage.getItem('items')),
                favId: JSON.parse(localStorage.getItem('ids'))
            })
        }
        fetcher(urlConstructor(this.state))
            .then(data => this.setState({ searchResults: data }))
    }

    componentDidUpdate() {
        if (this.state.favorites.length > 0) {
            localStorage.setItem('items', JSON.stringify(this.state.favorites))
            localStorage.setItem('ids', JSON.stringify(this.state.favId))
        }
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

    handleSearch =  debounce(() => {
        this.setState(
            {
                searchInput: document.getElementById('search').value,
                pgOffset: 0
            },
            () => {
                fetcher(urlConstructor(this.state))
                    .then(data => this.setState({ searchResults: data }))
            }
        )
    }, 1000)

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
    // Adds clicked item to favorites and also removes them
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
                    <Route exact path='/SimpleAnimeSearcher'>
                        <AnimeList
                            animeArr={this.state.searchResults} more={this.handleMore} fav={this.handleFav}
                            favArr={this.state.favorites}
                            favId={this.state.favId}
                        />
                    </Route>
                    <Route exact path='/SimpleAnimeSearcher/favorites'>
                        <Favorites favArr={this.state.favorites} fav={this.handleFav} />
                    </Route>
                </Switch>
            </Router>
        )
    }
}