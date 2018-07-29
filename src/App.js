import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchUsers  } from './actions/userActions'

class App extends Component {

  componentWillMount(){
    //this.props.fetchUsers();
  }
  
  fetchUsers(){
    this.props.fetchUsers();
  }
  
  render() {
    const { users } = this.props;

    console.log(users);
    
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
      dispatch(fetchUsers());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
