import axios from 'axios';

export function fetchUsers(){
    return function(dispatch){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{
            dispatch({type:"Fetch_users_received", payload : response.data})
        })
        .catch((error) =>{
            dispatch({type:"Fetch_users_error", payload : error})
        })
    }
}

export function fetchUsersPromise(){
    return {
        type:'User',
        payload:axios.get('http://localhost:3000/flashes')
    }
}
