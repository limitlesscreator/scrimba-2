import {gameReducer} from "./gamesReducer";
import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";

const initState = 0
const counterReducer = (state = initState, action) => {
    // making console log for better understand the flow of reducer and middleware :D
    // console.log('our reducer run')
    console.log(`our action type is: ${action.type}`)
    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        default:
            return state
    }

}

export const rootReducer = combineReducers({
    games: gameReducer,
    user: counterReducer,
    posts: postsReducer
})

// 5:29