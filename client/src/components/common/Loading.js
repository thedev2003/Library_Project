// Refactored LoadingComponent for reuse in all async components

import React from 'react';

const Loading = () => (
	<div className="col-12 heading justify-content-center loading">
		<br /><br />
		<h1 align="center">
			<span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
			<br />Loading...
		</h1>
	</div>
);

export default Loading;




// import React from 'react';

// const Loading = () => {
//     return(
//         <div className="col-12 heading justify-content-center loading">
//             <br/><br/>
//             <br/><br/>
//             <h1 align="center">
//             <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
//             <br/><br/>
//             Loading ....</h1>
//         </div>
//     );
// };

// export default Loading;