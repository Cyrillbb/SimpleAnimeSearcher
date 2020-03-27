import React from 'react';
import { urlConstructor, fetcher } from '../actions'
import Header from './Header/Header'
import { queryParts, sortTypes } from '../constants'
import { AnimeList } from './AnimeList/AnimeList'

export class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: '',
            searchType: sortTypes.byPop,
            searchResults: [],
            favotites: [],
            pgOffset: 0,
        }

    }

    componentDidMount() {
        fetcher(urlConstructor(this.state))
            .then(data => this.setState({ searchResults: data.slice() }))
            .then(console.log(this.state))
    }

    handleButtonSort = (event) => {
        this.setState({ searchType: event.target.value, searchInput: '', pgOffset: 0 }, () => {
            fetcher(urlConstructor(this.state))
                .then(data => this.setState({ searchResults: data.slice() }, console.log(urlConstructor(this.state))))
        })
    }

    handleInputSearch = (event) => {
        this.setState({ searchInput: event.target.value, pgOffset: 0 }, () => {
            fetcher(urlConstructor(this.state))
                .then(data => this.setState({ searchResults: data.slice() }, console.log(urlConstructor(this.state))))
        })
    }

    handleMore = () => {
        this.setState({ pgOffset: this.state.pgOffset + queryParts.resultsNum }, () => {
            fetcher(urlConstructor(this.state))
                .then(data => this.setState({ searchResults: this.state.searchResults.concat(data) }, console.log(this.state)))
        })
    }

    render() {
        return (
            <div>
                <Header sort={this.handleButtonSort} search={this.handleInputSearch} />
                <AnimeList animeArr={this.state.searchResults} more={this.handleMore} />
            </div>
        )
    }
}