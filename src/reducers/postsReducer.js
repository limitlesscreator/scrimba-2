const initState = {
    items: [],
    loading: false,
    error: null
}
export const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_REQUESTS':
            return {
                ...initState,
                loading: true,
                error: null,
            }
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                items: action.payload,
                loading: false,
            }
        case 'FETCH_POSTS_FAILED':
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state

    }
}