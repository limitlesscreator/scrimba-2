import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider, useSelector} from "react-redux";
import {rootReducer} from "./reducers";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import axios from "axios";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const myLogger = (store) => (next) => (action) => {
    // console.log('middleware run')
    return next(action)
}
const secondMiddleware = (store) => (next) => (action) => {
    console.log('second middleware run')
    return next(action)
}

const capAtTen = store => next => action => {
    console.log('third middleware')
    if (store.getState().user === 10) {
        return next({type: 'DECREMENT'})
    }
    next(action)
}
// const middleWareSecond = (store) => {
//     // without 'next' and 'action' our action object gonna die in middleware
//     return (next) => {
//         return (action) => {
//             console.log('middle ware ran')
//             return next(action)
//         }
//     }
// }

const fetchMiddleWare = state => next => async action => {
    console.log('it works')
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return next({...action, payload: data.data})
}

const store = createStore(
    rootReducer,
    composeEnchancer(applyMiddleware(thunk,
        myLogger,
        secondMiddleware,
        capAtTen,
        fetchMiddleWare,
    ))
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Provider store={store}>
    <App/>
</Provider>)

reportWebVitals();

