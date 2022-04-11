import {gameDetailsURL, gameScreenshotURL} from "../api";
import axios from "axios";

export const loadDetail = (id) => async (dispatch) => {
    dispatch({type: "LOADING_DETAIL"})
    const detailData = await axios.get(gameDetailsURL(id))
    const screenShotData = await axios.get(gameScreenshotURL(id))
    console.log(detailData.data)

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenShotData.data
        },
    });
}
