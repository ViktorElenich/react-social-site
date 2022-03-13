import React from 'react';
import './MyPost.scss';
import { Post } from './Post/Post';
import { ADD_POST, UPDATE_NEW_POST_TEXT } from '../../../helpers/const';

export const MyPost = (props) => {

    const posts = props.posts.map( post => <Post message={post.message} name={post.name} />)

    const newPost = React.createRef();

    const addPost = () => {
        props.dispatch({ type: ADD_POST });
    }

    const onTextAreaChange = () => {
        let text = newPost.current.value;
        props.dispatch({ type: UPDATE_NEW_POST_TEXT, newText: text });
    }

    return (
        <div className='post__container'>
            <h3>My Posts</h3>
            <div className='send__message'>
                <textarea ref={newPost} onChange={onTextAreaChange} value={props.newPostText} />
                <button onClick={ addPost }>Send</button>
            </div>
            <div className='my__posts'>
                {posts}
            </div>
        </div>
        
    )
}