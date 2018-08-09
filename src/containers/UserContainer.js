import { UserComponent } from '../components/UserComponent';
import { connect } from 'react-redux';
import { fetchUsers, fetchUsersPromise  } from '../actions/userActions'

function mapStateToProps(state, props){
    return {
      //user is name defined in combinedreducer
      users : state.user.users,
      showHeader : state.user.fetched
    };
}
  
  const mapDispatchToProps = (dispatch) =>{
    return {
      fetchUsers: () => {
        dispatch({type:"Fetch_User_start"});
        //Thunkway
        //dispatch(fetchUsers());
        //Promiseway
        dispatch(fetchUsersPromise()).then((resp)=> {
            //resolve promise here
            console.log('asdfsdf', resp);
        });
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
