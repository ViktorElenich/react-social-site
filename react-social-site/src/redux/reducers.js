import { 
    ADD_POST, 
    SEND_MESSAGE, 
    FOLLOW, UNFOLLOW, 
    SET_USERS, 
    UPDATE_NEW_MESSAGE, 
    UPDATE_NEW_POST_TEXT, 
    SET_CURRENT_PAGE, 
    SET_TOTAL_USERS_COUNT, 
    IS_FETCHING
} from "../helpers/const";

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

const initialStateUsers = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const profileReducer = (state = initialStateProfile, action) => {


    switch(action.type){
        case ADD_POST: 
            let newPost = {
                name: 'Stas',
                message: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
    
}

export const dialogsReducer = (state = initialStateDialogs, action) => {


    switch(action.type){
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.message,
            }
        case SEND_MESSAGE:
            let sendMessage = state.newMessage;
            return {
                ...state,
                newMessage: '',
                dialog: [...state.dialog, {name: 'Stas', message: sendMessage}]
        }
        default:
            return state;
    }
}

export const usersReducer = (state = initialStateUsers, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID){
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID){
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users}
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }
        case IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default: 
            return state
    }
}

export const addPostAC = () => ({ type: ADD_POST });
export const updatePostAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const updateNewMessageAC = (message) => ({ type: UPDATE_NEW_MESSAGE, message: message });
export const sendMessageAC = () => ({ type: SEND_MESSAGE });
export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });