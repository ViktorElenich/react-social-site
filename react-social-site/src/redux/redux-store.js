import { createStore, combineReducers } from 'redux';
import { profileReducer, dialogsReducer, usersReducer } from './reducers';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

export let store = createStore(reducers);

window.store = store;