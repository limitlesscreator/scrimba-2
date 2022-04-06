import {newGamesURL, popularGamesURL, upcomingGamesURL} from "../api";
import axios from "axios";

//Action creator
export const loadGames = () => async (dispatch) => {
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
