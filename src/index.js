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
import {fetchMiddleWare} from "./actions/fetchPosts";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose




const store = createStore(
    rootReducer,
    composeEnchancer(applyMiddleware(thunk))
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Provider store={store}>
    <App/>
</Provider>)

reportWebVitals();

// 9:38