export const queryParts = {
    apiURL: 'https://kitsu.io/api/edge/anime?',
    nameSearch: '&filter[text]=',
    topRated: '&sort=ratingRank',
    mostPop: '&sort=popularityRank',
    topAir: '&filter[status]=current&sort=popularityRank',
    resultsNum: 16,
    pageLim: '&page[limit]=',
    pageOff: '&page[offset]=',
    categories: 'https://kitsu.io/api/edge/categories?sort=-totalMediaCount&page[limit]=60&page[offset]=0',
    filter: '&fields[anime]=id,posterImage,titles,canonicalTitle,averageRating,popularityRank,ageRating,episodeCount,status,synopsis',
    categSearch : 'filter[categories]=',   
}

export const sortTypes = {
    byRating: 'topRated',
    byPop: 'mostPop',
    byTopAir: 'topAir'    
}