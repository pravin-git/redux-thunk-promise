const initialState = {
    fetching : false,
    fetched : false,
    users : [],
    error : null
};

export default function reducer(state= initialState, action){
    switch (action.type) {
        case "Fetch_User_start":
            return {...state, fetching: true}
        case "Fetch_users_received":
            return {...state, fetching: false, fetched: true, users : action.payload}
        case "Fetch_users_error":
            return {...state, fetching: false, error : action.payload }
        default:
            return state;
    }
}