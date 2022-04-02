import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

export const Counter = () => {
    // const [count, setCount] = useState (0)
    const counter = useSelector(state => state.counter)
    const logged = useSelector(state => state.logged)
    console.log(logged)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
            <br/>
            <button onClick={() => dispatch({type: "SIGN_IN"})}>{logged ? 'SIGN OUT' : 'SIGN IN'}</button>
            {logged ? (
                <div>
                    <h3><b>Movie list</b></h3>
                </div>
            ): null}
        </div>
    );
};
