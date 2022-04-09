import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./reducers";
import thunk from "redux-thunk";

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

