import { queryParts } from './constants'


export const urlConstructor = (state) => {
    if (state.searchInput === '') {
        return queryParts.apiURL + queryParts[state.searchType] + queryParts.pageLim + queryParts.resultsNum + queryParts.pageOff + state.pgOffset + queryParts.filter
    }

    // else if(state.categoryName.length > 0) {
    //     console.log('yes')
    //     return queryParts.apiURL + queryParts.categSearch + state.categoryName + queryParts.mostPop + queryParts.pageLim + queryParts.resultsNum + queryParts.pageOff + state.pgOffset + queryParts.filter
    // }

    else {
        return queryParts.apiURL + state.searchInput + queryParts.mostPop + queryParts.pageLim + queryParts.resultsNum + queryParts.pageOff + state.pgOffset + queryParts.filter
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

export const debounce = (func, delay) => {
    let inDebounce
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
  }