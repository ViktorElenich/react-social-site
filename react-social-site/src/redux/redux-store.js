import { createStore, combineReducers, applyMiddleware } from 'redux';
import { profileReducer, dialogsReducer, usersReducer, authReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;