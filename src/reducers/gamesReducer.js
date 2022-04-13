const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched:[],
    isLoading: false
}

export const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GEMS":
            return {...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
                isLoading: false
            }
        case "LOADING_GAMES":
            return {
                ...state, isLoading: true
            }
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched,
            };
        case "CLEAR_SEARCHED":
            return {
                ...state, searched: []
            }

        default:
            return {...state}
    }
}


