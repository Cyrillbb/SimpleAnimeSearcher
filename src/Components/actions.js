import { queryParts } from './constants'


export const urlConstructor = (state) => {
    if (state.searchInput === '') {
        console.log('url hi')
        return queryParts.apiURL + queryParts[state.searchType] + queryParts.pageLim + queryParts.resultsNum + queryParts.pageOff + state.pgOffset
    }

    else {
        return queryParts.apiURL + queryParts.nameSearch + state.searchInput + queryParts.pageLim + queryParts.resultsNum + queryParts.pageOff + state.pgOffset
    }

}

export const fetcher = (url) => {
    console.log("hello")
    return (
        fetch(url)
            .then(data => data.json())
            .then(data => data.data)
    )
}