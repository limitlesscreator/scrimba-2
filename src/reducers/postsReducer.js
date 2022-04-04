const initState = []
export const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return [...initState, action.payload]
        default:
            return state

    }
}