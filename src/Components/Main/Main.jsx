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
            pgOffset: 0,
        }

    }

    componentDidMount() {
        fetcher(urlConstructor(this.state))
            .then(data => this.setState({ searchResults: data }))
            .then(console.log(this.state))
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
        if (this.state.favorites.indexOf(item) === -1) {
            this.setState({ favorites: this.state.favorites.concat([item]) })
        }
        else {
            let favCopy = this.state.favorites;
            favCopy.splice(favCopy.indexOf(item), 1);
            this.setState({ favorites: favCopy })
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