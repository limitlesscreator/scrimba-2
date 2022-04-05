import './App.css';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "./actions/gamesAction";
import {decrement, increment} from "./actions/action";
import axios from "axios";
import {fetchMiddleWare} from "./actions/fetchPosts";


function App() {
    const dispatch = useDispatch()
    const value = useSelector(data => data.user)
    const fetchData = useSelector(state => state)
    console.log(fetchData)

    const getData = async () => {
        console.log('fetching data...')
        await dispatch(loadGames())
        console.log('done :)')
    }

    useEffect(() => {
        // getData()
    }, [])

    const renderPosts = () => {
        if (fetchData.posts.loading) {
            return (
                <h1>Loading...</h1>
            )
        }
        return fetchData.posts.items?.map(el => {
            return (
                <h2 key={el.id}>{el.title}</h2>
            )
        })
    }


    return (
        <div>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(fetchMiddleWare())}>FETCH POSTS</button>
            Total : {value} <br/>
            {/*STATE: {fetchData.posts.loading ? 'Loading' : ''}*/}
            {/*{fetchData}*/}
            {renderPosts()}
        </div>
    )
}

export default App;

