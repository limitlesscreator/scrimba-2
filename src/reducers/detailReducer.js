const initialState = {game: {}, screen:{}}

export const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        // I FOUND THE BAG!!! NOT TYPES, THERE IS A TYPE!!
        case "GET_DETAIL":
            console.log('detailReducer: work')
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen
            }
        default: {
            return state
        }
    }
}