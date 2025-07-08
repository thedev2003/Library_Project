const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users.js');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

require('dotenv').config();

exports.local = passport.use(new LocalStrategy(User.authenticate()));

// For sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function (user) {
	return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: 3600 });
};

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.SECRET_KEY
};

exports.jwtPassport = passport.use(new JwtStrategy(opts,
	(jwt_payload, done) => {
		console.log("JWT payload: ", jwt_payload);
		User.findOne({ _id: jwt_payload._id }, (err, user) => {
			if (err) return done(err, false);
			else if (user) return done(null, user);
			else return done(null, false);
		});
	})
);

exports.verifyUser = passport.authenticate('jwt', { session: false });

exports.verifyAdmin = function (req, res, next) {
	if (req.user.admin) {
		next();
	} else {
		var err = new Error('You are not authorized!');
		err.status = 403;
		return next(err);
	}
};