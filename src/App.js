import './App.css';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "./actions/gamesAction";
import {decrement, increment} from "./actions/action";
import axios from "axios";
import {fetchPosts} from "./actions/fetchPosts";


function App() {
    const dispatch = useDispatch()
    const value = useSelector(data => data.user)

    const getData = async () => {
        console.log('fetching data...')
        await dispatch(loadGames())
        console.log('done :)')
    }

    useEffect(() => {
        // getData()
    }, [])

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(fetchPosts())}>FETCH POSTS</button>
            Total : {value}
        </div>
    )
}

export default App;

// 2:40