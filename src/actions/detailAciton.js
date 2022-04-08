import {gameDetailsURL} from "../api";
import axios from "axios";

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsURL(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData
        }
    })
}
