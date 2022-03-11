import './MyPost.scss';
import { Post } from './Post/Post';

export const MyPost = () => {
    return (
        <div className='post__container'>
            <h3>My Posts</h3>
            <div className='send__message'>
                <textarea></textarea>
                <button onClick={ () => alert('hey') }>Send</button>
            </div>
            <div className='my__posts'>
                <Post message='Whatsupp' />
            </div>
        </div>
        
    )
}