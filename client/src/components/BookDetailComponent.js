// Refactored BookDetailComponent for clarity and readability

import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from './common/Loading';
import ErrorMessage from './common/Error';
import { Card, CardBody, CardImg, CardTitle, CardText, Badge } from 'reactstrap';

const BookDetail = ({ books }) => {
  const { bookId } = useParams();

  const { books: bookList, isLoading, errMess } = books;
  const book = bookList.find(b => b._id === bookId);

  if (isLoading) return <Loading />;
  if (errMess) return <ErrorMessage message={errMess} />;
  if (!book) return <ErrorMessage message="Book not found" />;

  return (
    <div className="container">
      <div className="row heading mt-3">
        <div className="col-12 text-center">
          <h2>Book Details</h2>
          <hr />
        </div>
        <div className="col-md-6 col-12 text-center">
          <Card>
            <CardImg top src={book.image} alt={book.name} />
          </Card>
        </div>
        <div className="col-md-6 col-12">
          <Card className="shadow-sm p-3">
            <CardBody>
              <CardTitle tag="h4">{book.name}</CardTitle>
              <CardText><strong>Author:</strong> {book.author}</CardText>
              <CardText><strong>ISBN:</strong> {book.isbn}</CardText>
              <CardText><strong>Description:</strong> {book.description}</CardText>
              <CardText>
                <strong>Category:</strong> <Badge color="info">{book.cat}</Badge>
              </CardText>
              <CardText><strong>Copies:</strong> {book.copies}</CardText>
              <CardText><strong>Location:</strong> Floor {book.floor}, Shelf {book.shelf}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;





// import React,{Component} from 'react';
// import {Row,Col, Card, CardText, CardHeader, CardFooter, CardBody,CardTitle } from 'reactstrap';
// import Loading from './LoadingComponent';
// function RenderBook({book,isAdmin,toggleEditModal,changeSelected}) {
//     if (book != null)
//         return(
//         <Card>
       
//        <CardHeader tag="h3">{book.name} &nbsp; &nbsp; &nbsp;&nbsp;
//        {isAdmin?(<span className="fa fa-pencil Option" onClick={()=>{changeSelected(book._id);toggleEditModal();}}/>):(<React.Fragment/>)}
//         </CardHeader>
//         <CardBody>
//           <CardTitle align="right"> - {book.author}</CardTitle>
//           <CardText>
//               <b> Category: </b> {book.cat} <br/><br/>
//               <b> ISBN number: </b> {book.isbn} <br/><br/>
//               <b>Descrption: </b><br/> {book.description} <br/><br/>
//               <b> Location: </b> <br/>Shelf no. {book.shelf} ,<br/>
//               {book.floor===0?' Ground ':book.floor}{(book.floor===1)?'st ':(book.floor===2)?'nd ':(book.floor===3)?'rd ':(book.floor===0)?'':'th '}
//               Floor <br/><br/>
//              <b> Copies available : </b> {book.copies}
//       </CardText><br/>
//         </CardBody>
//         <CardFooter className="text-muted">
//         <Row>
//         <Col md={6}>
//         Created at : {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit', hour: 'numeric',minute: 'numeric', hour12: true }).format(new Date( Date.parse(book.createdAt)))}    
//         </Col>
//         <Col md={6}>
//         Last updated at : {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit',hour: 'numeric',minute: 'numeric', hour12: true}).format(new Date( Date.parse(book.updatedAt)))} 
//         </Col>
//         </Row>
//         </CardFooter>
//         </Card>
//         );
//     else
//         return(
//             <div></div>
//         );
//         }


// class BookDetail extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//         }
//     }
//     componentDidMount() {
//         window.scrollTo(0, 0)
//       }
// render(){
//   if (this.props.isLoading) {
//     return(
//         <div className="container">
//             <div className="row">            
//                 <Loading />
//             </div>
//         </div>
//     );
// }
// else if (this.props.errMess) {
//     return(
//         <div className="container loading">
//             <div className="row heading"> 
//                 <div className="col-12">
//                     <br/><br/><br/><br/>
//                     <h3>{this.props.errMess}</h3>
//                 </div>
//             </div>
//         </div>
//     );
// }
// else
//     return(

//         <div className="container full">
//         <div className="row heading">
//           <div className="col-12">
//           <br/>        <br/>
//           <RenderBook book={this.props.book} isAdmin={this.props.isAdmin}
//                     toggleEditModal={this.props.toggleEditModal}
//                     changeSelected={this.props.changeSelected}>
//               </RenderBook>

//         <br/>
//           </div>
//         </div>
//       </div>
//         );
// }

// }

// export default BookDetail;