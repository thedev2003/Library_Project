// Refactored UserDetailComponent showing details for a single user

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from './common/Loading';
import ErrorMessage from './common/Error';

const UserDetailComponent = () => {
  const { userId } = useParams();
  const { users, isLoading, errMess } = useSelector(state => state.users);

  const user = users.find(u => u._id === userId);

  if (isLoading) return <Loading />;
  if (errMess) return <ErrorMessage message={errMess} />;
  if (!user) return <ErrorMessage message="User not found." />;

  return (
    <div className="container mt-4">
      <h2 className="heading text-center">User Details</h2>
      <hr />
      <div className="row justify-content-center">
        <div className="col-md-6 col-12">
          <div className="border rounded p-4 shadow-sm">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Admin:</strong> {user.admin ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailComponent;






// import React,{Component} from 'react';
// import {Card,CardBody,CardHeader,CardText} from 'reactstrap';
// import Loading from './LoadingComponent';

// class UserDetail extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//         }
//     }

//     componentDidMount() {
//         window.scrollTo(0, 0)
//       }


// render(){
//     if (this.props.isLoading) {
//         return(
//             <div className="container">
//                 <div className="row">            
//                     <Loading />
//                 </div>
//             </div>
//         );
//     }
//     else if (this.props.errMess) {
//         return(
//             <div className="container loading">
//                 <div className="row heading"> 
//                     <div className="col-12">
//                         <br/><br/><br/><br/>
//                         <h3>{this.props.errMess}</h3>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
//     else    
//     return(

//         <div className="container mt-6 home text-center align-self-center">
//             <div className="row text-center justify-content-center">
            
//             <Card className="heading">
                
//         <CardHeader><h3>User Details</h3></CardHeader>
//         <CardBody>
//           <CardText>
//           <h5> First Name : {'          '+this.props.user.firstname}</h5>
//           <h5> Last Name : {'          '+this.props.user.lastname}</h5>
//           <h5> {(this.props.user.admin)?'Admin Id : ':'Roll No.'} : {'          '+this.props.user.roll}</h5>
//           <h5> Email : {'          '+this.props.user.email}</h5>
//           <h5> Username : {'          '+this.props.user.username}</h5>
//           </CardText>
//         </CardBody>
//           </Card>
//             </div>
//             </div>
//         );
// }

// }

// export default UserDetail;