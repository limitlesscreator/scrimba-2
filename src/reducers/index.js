import {counterReducer} from "./counterReducer";
import {logged} from "./isLogged";
import {combineReducers} from "redux";

export const allReducers = combineReducers({
    counter: counterReducer,
    logged: logged
})