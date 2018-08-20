import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

import UserComponent from './components/UserComponent';
import userReducer  from './reducers/userReducer';

configure({adapter: new Adapter()});

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

it('user component when showHeader is false', () =>{
  const wrapper = shallow(<UserComponent users={[]} showHeader={false} />);
  expect(wrapper.find('#findme').find('h6').length).toBe(1);
  expect(wrapper.find('#findme').length).toBe(1);
})

it('user component when showHeader is true', () =>{
  const wrapper = shallow(<UserComponent users={[]} showHeader={true} />);
  expect(wrapper.find('#findme').find('h6').length).toBe(0);
  expect(wrapper.find('#findme').length).toBe(1); 
})

it('user component when users are there', () =>{
  const wrapper = shallow(<UserComponent users={[{name:'pravin'}]} showHeader={true} />);
  expect(wrapper.find('#userList').length).toBe(1); 
})


it('add', () => {
  expect(1).toEqual(1);
});