const express = require('express');
const app = express();
app.use(express.json());


const passport = require('passport');
app.use(passport.initialize());
// var authenticate = require('./authenticate');

// globally enable CORS for all routes
app.use(require('./routes/cors'));

// mount routes
app.use('/api', require('./routes/routeHandler'));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	
	next();
});


// Connect to mongo
const connectToDB = require('./config/dbConnect');
connectToDB();


// Serve static assets if in production
// const path = require('path');
// if (process.env.NODE_ENV === 'production') {
// 	// Set static folder
// 	app.use(express.static('client/build'));

// 	app.get('*', (_, res) => {
// 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// 	});
// }

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started running on port ${port}`));