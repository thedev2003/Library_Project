const cors = require('cors');

const corsOptionsDelegate = (req, callback) => {
	// whitelist of allowed origins
	const whitelist = [
		'http://localhost:3000',
		'http://localhost:5000',
		'https://lib-manage.herokuapp.com/',
		'https://lib-manage.herokuapp.com:3000',
		'https://lib-manage.herokuapp.com:5000'
	];

	const corsOptions = { origin: false };
	console.log(req.header('Origin'));
	if (whitelist.indexOf(req.header('Origin')) !== -1) {
		corsOptions.origin = true;
	}

	callback(null, corsOptions);
};

// exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);