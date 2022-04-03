const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
}

export const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GEMS":
            return {...state, popular: action.payload.data.results}
        default:
            return {...state}
    }
}


