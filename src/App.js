import './App.css';
import React, {useEffect, useState} from "react";
import {Home} from "./pages/Home";
import {GlobalStyles} from "./Components/GlobalStyles";
import {Route,Routes} from "react-router-dom";


function App() {


    return (
        <div>
            <GlobalStyles/>
                <Routes>
                    <Route path={'/game/:id'} element={<Home/>}/>
                    {/* Optional index route if no nested routes match*/}
                    <Route
                        index
                        element={<Home/>}
                    />
                </Routes>
        </div>
    )
}

export default App;

