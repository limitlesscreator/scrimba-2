import './App.css';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "./actions/gamesAction";
import {decrement, increment} from "./actions/action";
import axios from "axios";
import {fetchMiddleWare} from "./actions/fetchPosts";
import {Home} from "./pages/Home";


function App() {



    return (
        <div>
            <Home/>
        </div>
    )
}

export default App;

// 3:26