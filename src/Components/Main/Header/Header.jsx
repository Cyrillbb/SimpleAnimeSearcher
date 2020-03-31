import React from 'react'
import {    
    Switch,
    Route,
} from 'react-router-dom'
import ButtonBar from './ButtonBar/ButtonBar'
import { SearchBar } from './SearchBar/SearchBar'
import './Header.css'

function Header(props) {
    return (
        <div className='header'>
            <SearchBar search={props.search} />
            <Switch>
                <Route exact path='/SimpleAnimeSearcher'>
                    <ButtonBar sort={props.sort} categories={props.categories} />
                </Route>
            </Switch >
        </div>
    )
}

export default Header

