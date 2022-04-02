import {gameReducer} from "./gamesReducer";
import {combineReducers} from "redux";

const initState = {
    name: '',
    isLogged: false,
}
const userReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return {...state}
    }
}

export const rootReducer = combineReducers({
    games: gameReducer,
    user: userReducer
})