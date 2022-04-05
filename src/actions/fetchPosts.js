import axios from "axios";


export const fetchMiddleWare = () => async (dispatch,getState)  => {
    dispatch({type: 'FETCH_POSTS_REQUESTS'})

    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({type: 'FETCH_POSTS_SUCCESS', payload: data.data})
    } catch (e) {
        dispatch({type: 'FETCH_POSTS_FAILED',e})
    }


    // if(data){
    //     dispatch ({type:'FETCH_POSTS_SUCCESS',payload: data.data})
    // }
    // else if(!data){
    //     dispatch ({type:'FETCH_POSTS_FAILED',payload: data.data})
    // }
}


