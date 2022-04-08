import {gameReducer} from "./gamesReducer";
import {combineReducers} from "redux";
import {detailReducer} from "./detailReducer";

export const rootReducer = combineReducers({
    games: gameReducer,
    detail: detailReducer
})

