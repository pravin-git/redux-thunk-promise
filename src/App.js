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
    const { users } = this.props;
    if(!users.length){
      return <button onClick={this.fetchUsers.bind(this)}> Load Users </button>
    }

    const mappedusers = users.map(usr => <li>{usr.name}</li>)
    return <div>   
      <h1>Pravin</h1>
      <ul>{mappedusers}</ul>
    </div>  
  }
}

function mapStateToProps(state, props){
  return{
    //user is name defined in combinedreducer
    users : state.user.users
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchUsers: () =>{
      dispatch({type:"Fetch_User_start"});
      //Thunkway
      dispatch(fetchUsers());
      //Promiseway
      //dispatch(fetchUsersPromise());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
