// Refactored FooterComponent with basic styling

import React from 'react';

const FooterComponent = () => {
	return (
		<footer className="bg-dark text-white py-3 mt-auto">
			<div className="container text-center">
				<small>&copy; {new Date().getFullYear()} Library System. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default FooterComponent;





// import React,{Component} from 'react';

// class Footer extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//         }
//     }

// render(){
//     return(
//                     <p className="footer" align="center">© Copyright 2019 IIT(ISM)</p>
//           );
// }

// }

// export default Footer;