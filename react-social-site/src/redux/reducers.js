import { ADD_POST, SEND_MESSAGE, UPDATE_NEW_MESSAGE, UPDATE_NEW_POST_TEXT } from "../helpers/const";

const initialStateProfile = {
    posts: [
        { name: 'Anton', message: 'Whatsup!'},
        { name: 'Nikola', message: 'Yo!'},
    ],
    newPostText: ''
}

const initialStateDialogs =  {
    dialog: [
        { name: 'Elena', message: 'Hi'},
        { name: 'Victor', message: 'How are you?'},
        { name: 'Andrei', message: 'Whatsup?'},
    ],
    newMessage: ''
}

export const profileReducer = (state = initialStateProfile, action) => {

    switch(action.type){
        case ADD_POST: {
            let newPost = {
                name: 'Stas',
                message: state.newPostText
            };
            let cloneState = {...state};
            cloneState.posts = [...state.posts];
            cloneState.posts.push(newPost);
            cloneState.newPostText = '';
            return cloneState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let cloneState = {...state};
            cloneState.newPostText = action.newText;
            return cloneState;
        }
        default:
            return state;
    }
    
}

export const dialogsReducer = (state = initialStateDialogs, action) => {

    switch(action.type){
        case UPDATE_NEW_MESSAGE: {
            let cloneState = {...state};
            cloneState.newMessage = action.message;
            return cloneState;
        }
        case SEND_MESSAGE: {
            let cloneState = {...state};
            cloneState.dialog = [...state.dialog];
            let sendMessage = cloneState.newMessage;
            cloneState.newMessage = '';
            cloneState.dialog.push({name: 'Stas', message: sendMessage});
            return cloneState;
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({ type: ADD_POST });
export const updatePostAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const updateNewMessageAC = (message) => ({ type: UPDATE_NEW_MESSAGE, message: message });
export const sendMessageAC = () => ({ type: SEND_MESSAGE });