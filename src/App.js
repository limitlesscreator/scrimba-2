import './App.css';
import React, {useEffect, useState} from "react";
import {Home} from "./pages/Home";
import {GlobalStyles} from "./Components/GlobalStyles";


function App() {



    return (
        <div>
            <GlobalStyles/>
                <Home/>
        </div>
    )
}

export default App;

