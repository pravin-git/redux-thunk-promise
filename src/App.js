import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchUsers, fetchUsersPromise  } from './actions/userActions'

class App extends Component {

  componentWillMount(){
    //this.props.fetchUsers();
  }
  
  fetchUsers(){
    this.props.fetchUsers();
  }
  
  render() {
    const { users, showHeader } = this.props;
    const header = showHeader ? <h1>pramod</h1> : <h6>pravin</h6>
    if(!users.length){
      return <div>
        {header} 
        <button onClick={this.fetchUsers.bind(this)}> Load Users </button>
      </div>
    }
    
    const mappedusers = users.map(usr => <li>{usr.name}</li>)
    
    return <div>   
      {header}
      <ul>{mappedusers}</ul>
    </div>  
  }
}

function mapStateToProps(state, props){
  return{
    //user is name defined in combinedreducer
    users : state.user.users,
    showHeader : state.user.fetched
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchUsers: () =>{
      dispatch({type:"Fetch_User_start"});
      //Thunkway
      //dispatch(fetchUsers());
      //Promiseway
      dispatch(fetchUsersPromise()).then((resp)=> {
        console.log('asdfsdf', resp);
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
