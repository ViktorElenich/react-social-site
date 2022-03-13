import { dialogsReducer, profileReducer } from "./reducers";

export let store = {
    _state: {
        profilePage: {
            posts: [
                { name: 'Anton', message: 'Whatsup!'},
                { name: 'Nikola', message: 'Yo!'},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialog: [
                { name: 'Elena', message: 'Hi'},
                { name: 'Victor', message: 'How are you?'},
                { name: 'Andrei', message: 'Whatsup?'},
            ],
            newMessage: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _render() {
        console.log('render')
    },
    subscribe(observer) {
        this._render = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._render(this._state);
    }
}

window.store = store;
