import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';

const initialState = {
    fetching : false,
    fetched : false,
    users : [],
    error : null
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case "Fetch_User_start":
            return {...state, fetching: true}
        case "Fetch_users_received":
            return {...state, fetching: false, fetched: true, users : action.payload}
        case "Fetch_users_error":
            return {...state, fetching: false, error : action.payload }
    }
    return state;
}

const logger = createLogger(); 
const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducer, middleware);

store.dispatch((dispatch)=>{
    dispatch({type:"Fetch_User_start"});
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{
            dispatch({type:"Fetch_users_received", payload : response.data})
        })
        .catch((error) =>{
            dispatch({type:"Fetch_users_error", payload : error})
        })
});

//Promise way
// store.dispatch({
//     type:"Users",
//     payload:axios.get('https://jsonplaceholder.typicode.com/users')
// });


ReactDOM.render(<App />, document.getElementById('root'));

