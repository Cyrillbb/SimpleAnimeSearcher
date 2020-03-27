export const queryParts = {
    apiURL: 'https://kitsu.io/api/edge/anime?',
    nameSearch: '&filter[text]=',
    topRated: '&sort=ratingRank',
    mostPop: '&sort=popularityRank',
    topAir: '&filter[status]=current&sort=popularityRank',
    resultsNum: 16,
    pageLim: '&page[limit]=',
    pageOff: '&page[offset]=',
}

export const sortTypes ={
    byRating: 'topRated',
    byPop: 'mostPop',
    byTopAir: 'topAir'    
}