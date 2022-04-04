import axios from "axios";

export const fetchPosts =  ()  => {
    // gonna be an error if we try to fetch data here) and then put it into obj
    return {type: 'FETCH_POSTS'}
}