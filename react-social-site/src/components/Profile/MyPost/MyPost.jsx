import React from 'react';
import './MyPost.scss';
import { Post } from './Post/Post';

export const MyPost = (props) => {

    const posts = props.posts.map( post => <Post message={post.message} name={post.name} />)

    const newPost = React.createRef();

    const addPost = () => {
        
        let text = newPost.current.value;

        props.addPost(text);
        newPost.current.value = '';
    }

    return (
        <div className='post__container'>
            <h3>My Posts</h3>
            <div className='send__message'>
                <textarea ref={newPost}></textarea>
                <button onClick={ addPost }>Send</button>
            </div>
            <div className='my__posts'>
                {posts}
            </div>
        </div>
        
    )
}