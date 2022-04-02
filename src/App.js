import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Weather} from "./Components/weather";
import {Counter} from "./Components/counter";
import {counterReducer} from "./reducers/counterReducer";
import {useSelector} from "react-redux";

function App() {

   return (
       <div>
           <Weather/>
           <Counter/>
       </div>
   )
}

export default App;

