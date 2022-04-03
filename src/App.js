import './App.css';
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {loadGames} from "./actions/gamesAction";


function App() {
    const dispatch = useDispatch()

    const getData = async () => {
        console.log('fetching data...')
        await dispatch(loadGames())
        console.log('done :)')
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            Hello Ignite
        </div>
    )
}

export default App;
