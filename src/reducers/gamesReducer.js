const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
}


export const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GEMS":
            return {...state}
        default:
            return {...state}
    }
}