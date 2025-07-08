// Refactored StatsComponent showing simple counts

import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './common/Loading';
import ErrorMessage from './common/Error';

const StatsComponent = () => {
  const { books } = useSelector(state => state.books);
  const { users } = useSelector(state => state.users);
  const { issues } = useSelector(state => state.issues);

  const isLoading = books.isLoading || users.isLoading || issues.isLoading;
  const errMess = books.errMess || users.errMess || issues.errMess;

  if (isLoading) return <Loading />;
  if (errMess) return <ErrorMessage message={errMess} />;

  return (
    <div className="container mt-4">
      <h2 className="heading text-center">Library Stats</h2>
      <hr />
      <div className="row text-center">
        <div className="col-md-4 col-12 mb-3">
          <div className="p-4 bg-light rounded shadow-sm">
            <h4>Total Books</h4>
            <h2>{books.books.length}</h2>
          </div>
        </div>
        <div className="col-md-4 col-12 mb-3">
          <div className="p-4 bg-light rounded shadow-sm">
            <h4>Total Users</h4>
            <h2>{users.users.length}</h2>
          </div>
        </div>
        <div className="col-md-4 col-12 mb-3">
          <div className="p-4 bg-light rounded shadow-sm">
            <h4>Total Issues</h4>
            <h2>{issues.issues.length}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;






// import React,{Component} from 'react';
// import { Card, CardText, CardBody, CardLink,
//     CardTitle, Button } from 'reactstrap';
// import {Link} from 'react-router-dom';
// import Loading from './LoadingComponent.js';

// class Stats extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//          }
//         this.i=1; 
//     }
//     componentDidMount() {
//         window.scrollTo(0, 0)
//       }

// render(){
//     if (this.props.issues.isLoading||this.props.booksLoading||this.props.usersLoading) {
//         return(
//             <div className="container">
//                 <div className="row">            
//                     <Loading />
//                 </div>
//             </div>
//         );
//     }
//     else if (this.props.issues.errMess) {
//         return(
//             <div className="container loading">
//                 <div className="row heading"> 
//                     <div className="col-12">
//                         <br/><br/><br/><br/>
//                         <h3>{this.props.issues.errMess}</h3>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
//     else if (this.props.usersErrMess) {
//         return(
//             <div className="container loading">
//                 <div className="row heading"> 
//                     <div className="col-12">
//                         <br/><br/><br/><br/>
//                         <h3>{this.props.usersErrMess}</h3>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
//     else if (this.props.booksErrMess) {
//         return(
//             <div className="container loading">
//                 <div className="row heading"> 
//                     <div className="col-12">
//                         <br/><br/><br/><br/>
//                         <h3>{this.props.booksErrMess}</h3>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
//     else {

    
//         return(

//         <div className="container mt-6 text-center align-self-center full">
//             <div className="row text-center justify-content-center heading">
//             <div className="col-12">
//                 <h3>Stats</h3>
//             </div>
//             </div>
//             <div className="row">
//             <div className="col-12 col-md-6 col-xl-4 mt-4">
//             <Card>
//                 <CardBody>
//                     <CardTitle>
//                         <h1>{this.props.books.length}</h1>
//                     </CardTitle>
//                     <CardText>Different books available</CardText>
//                         <CardLink tag={Link} to="/books">
//                             <Button color="info"><i className="fa fa-eye fa-lg"/>
//                              {' '}&nbsp;View
//                             </Button>           
//                         </CardLink>
//                 </CardBody>
//             </Card>
//             </div>

//             <div className="col-12 col-md-6 col-xl-4 mt-4">
//             <Card>
//                 <CardBody>
//                     <CardTitle>
//                         <h1>{this.props.issues.issues.length}</h1>
//                     </CardTitle>
//                     <CardText>Books Issued</CardText>
//                         <CardLink tag={Link} to="/logs">
//                             <Button color="info"><i className="fa fa-eye fa-lg"/>
//                              {' '}&nbsp;View
//                             </Button>           
//                         </CardLink>
//                 </CardBody>
//             </Card>
//             </div>
//             <div className="col-12 col-md-6 col-xl-4 mt-4">
//             <Card>
//                 <CardBody>
//                     <CardTitle>
//                     <h1>
//                     {this.props.issues.issues.filter((issue)=>(!issue.returned)).length}
//                     </h1>
//                     </CardTitle>
//                     <CardText>Books not yet returned</CardText>
//                         <CardLink>
//                             <Button tag={Link} to="/return" color="info"><i className="fa fa-eye fa-lg"/>
//                              {' '}&nbsp;View
//                             </Button>           
//                         </CardLink>
//                 </CardBody>
//             </Card>
//             </div>
//             <div className="col-12 col-md-6 col-xl-4 mt-4">
//             <Card>
//                 <CardBody>
//                     <CardTitle>
//                         <h1>{this.props.users.filter((user)=>(!user.admin)).length}</h1>
//                     </CardTitle>
//                     <CardText>Students registered</CardText>
//                         <CardLink tag={Link} to="/list_students">
//                             <Button color="info"><i className="fa fa-eye fa-lg"/>
//                              {' '}&nbsp;View
//                             </Button>           
//                         </CardLink>
//                 </CardBody>
//             </Card>
//             </div>
//             <div className="col-12 col-md-6 col-xl-4 mt-4">
//             <Card>
//                 <CardBody>
//                     <CardTitle>
//                         <h1>{this.props.users.filter((user)=>(user.admin)).length}</h1>
//                     </CardTitle>
//                     <CardText>Administrators in-charge</CardText>
//                         <CardLink tag={Link} to="/list_admins">
//                             <Button color="info"><i className="fa fa-eye fa-lg"/>
//                              {' '}&nbsp;View
//                             </Button>           
//                         </CardLink>
//                 </CardBody>
//             </Card>
//             </div>
//             </div>
            
//             <br/>
//             </div>
//           );
//         }
//     }

// }

// export default Stats;