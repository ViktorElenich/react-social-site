import { createStore, combineReducers } from 'redux';
import { profileReducer, dialogsReducer } from './reducers';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

export let store = createStore(reducers);

window.store = store;