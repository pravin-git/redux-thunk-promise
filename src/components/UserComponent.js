import React, { Component } from 'react';


export class UserComponent extends Component{

    fetchUsers(){
        this.props.fetchUsers();
    }

    render(){
        
        const { users, showHeader } = this.props;
        const header = showHeader ? <h1>pramod</h1> : <h6>pravin</h6>
        if(!users.length){
            return <div id="findme">
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

export default UserComponent;