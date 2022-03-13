import React from 'react';
import './MyPost.scss';
import { Post } from './Post/Post';

export const MyPost = (props) => {

    const posts = props.posts.map( post => <Post message={post.message} name={post.name} />)

    const newPost = React.createRef();

    const onAddPost = () => {
        props.addPost()
        //props.dispatch(addPostAC());
    }

    const onTextAreaChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
        //props.dispatch(updatePostAC(text));
    }

    return (
        <div className='post__container'>
            <h3>My Posts</h3>
            <div className='send__message'>
                <textarea ref={newPost} onChange={onTextAreaChange} value={props.newPostText} />
                <button onClick={ onAddPost }>Send</button>
            </div>
            <div className='my__posts'>
                {posts}
            </div>
        </div>
        
    )
}