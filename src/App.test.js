import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import userReducer  from './reducers/userReducer';

it('userReducer', () =>{

  expect(userReducer(undefined, {})).toEqual({"error": null, "fetched": false, "fetching": false, "users": []});
  
  const action = { type : 'Fetch_User_start'} ;
  expect(userReducer(undefined, action)).toEqual({"error": null, "fetched": false, "fetching": true, "users": []});
  
  const actionPending = { type : 'User_PENDING'} ;
  expect(userReducer(undefined, actionPending)).toEqual({"error": null, "fetched": false, "fetching": true, "users": []});
  
  const actionUserReceived = { type : 'Fetch_users_received', payload : []} ;
  expect(userReducer(undefined, actionUserReceived)).toEqual({"error": null, "fetched": true, "fetching": false, "users": actionUserReceived.payload});
  
  const actionUserFulfilled = { type : 'User_FULFILLED', payload : []} ;
  expect(userReducer(undefined, actionUserFulfilled)).toEqual({"error": null, "fetched": true, "fetching": false, "users": actionUserFulfilled.payload.data});
  
  const actionError = { type : 'Fetch_users_error', payload : []} ;
  expect(userReducer(undefined, actionError)).toEqual({"error": actionError.payload, "fetched": false, "fetching": false, "users": []});

});

it('add', () => {
  expect(1).toEqual(1);
});