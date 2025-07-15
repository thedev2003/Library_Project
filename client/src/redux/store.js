import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Books from './booksSlice.js';
import Auth from './authSlice.js';
import Issues from './issuesSlice.js';
import Users from './usersSlice.js'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			books: Books,
			auth: Auth,
			issues: Issues,
			users: Users
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
}