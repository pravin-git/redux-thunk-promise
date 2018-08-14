import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });

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

it('test component', () =>{
  const wrapper = shallow(<UserComponent users={[]} showHeader={false} />);
  console.log(wrapper);
  //expect(wrapper.find('.hello')).to.have.length(1);
})

it('add', () => {
  expect(1).toEqual(1);
});