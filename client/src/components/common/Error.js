const ErrorMessage = ({ message }) => (
  <div className="container loading">
    <div className="row heading">
      <div className="col-12 text-center">
        <br/><br/><h3>{message}</h3>
      </div>
    </div>
  </div>
);

export default ErrorMessage;