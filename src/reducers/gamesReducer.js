const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
}

export const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GEMS":
            return {...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames
            }
        default:
            return {...state}
    }
}


