import { createStore, combineReducers } from 'redux';
import { profileReducer, dialogsReducer, usersReducer, authReducer } from './reducers';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export let store = createStore(reducers);

window.store = store;