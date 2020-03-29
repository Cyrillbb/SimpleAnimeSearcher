import { queryParts } from './constants'


export const urlConstructor = (state) => {
    if (state.searchInput === '') {
        return queryParts.apiURL + queryParts[state.searchType] + queryParts.pageLim + queryParts.resultsNum + queryParts.pageOff + state.pgOffset
    }

    else {
        return queryParts.apiURL + queryParts.nameSearch + state.searchInput + queryParts.pageLim + queryParts.resultsNum + queryParts.pageOff + state.pgOffset
    }

}


export const fetcher = (url) => {
    return (
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
            }
        })
            .then(data => data.json())
            .then(data => data.data)
    )
}