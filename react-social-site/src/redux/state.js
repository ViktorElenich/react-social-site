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
            ]
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
        if(action.type === 'ADD_POST'){
            let newPost = {
                name: 'Stas',
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._render(this._state)
        } else if(action.type === 'UPDATE_NEW_POST_TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._render(this._state);
        }
    }
}

window.store = store;
