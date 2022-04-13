import {newGamesURL, popularGamesURL, searchGameURL, upcomingGamesURL} from "../api";
import axios from "axios";

//Action creator
export const loadGames = () => async (dispatch) => {
    dispatch({type: "LOADING_GAMES"})
    //Fetch Axios
    const popularGames = await axios.get(popularGamesURL())
    const newGamesData = await axios.get(newGamesURL())
    const upcomingDData = await axios.get(upcomingGamesURL())
    dispatch({
        type: 'FETCH_GEMS', payload: {
            popular: popularGames.data.results,
            upcoming: upcomingDData.data.results,
            newGames: newGamesData.data.results
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name))

    dispatch({type: 'FETCH_SEARCHED', payload: {searched: searchGames.data.results}})
}