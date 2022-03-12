let render = () => {
    console.log('render')
}

export const state = {
    profilePage: {
        posts: [
            { name: 'Anton', message: 'Whatsup!'},
            { name: 'Nikola', message: 'Yo!'},
        ]
    },
    dialogsPage: {
        dialog: [
            { name: 'Elena', message: 'Hi'},
            { name: 'Victor', message: 'How are you?'},
            { name: 'Andrei', message: 'Whatsup?'},
        ]
    },
    sidebar: {}
}

export const addPost = (post) => {
    let newPost = {
        name: 'Stas',
        message: post
    };
    state.profilePage.posts.push(newPost);
    render(state);
}

export const subscribe = (observer) => {
    render = observer;
}