import {popularGamesURL} from "../api";
import axios from "axios";

//Action creator
export const loadGames = () => async (dispatch) => {
    //Fetch Axios
    const popularGames = await axios.get(popularGamesURL())
    dispatch({type: 'FETCH_GEMS', payload: popularGames})
}
