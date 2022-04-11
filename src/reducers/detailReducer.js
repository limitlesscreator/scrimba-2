const initialState = {game: {platforms: []}, screen: {results: []}, isLoading: false}

export const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            console.log('detailReducer: work')
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false
            }
        case "LOADING_DETAIL":
            return {
                ...state, isLoading: true
            }
        default: {
            return state
        }
    }
}