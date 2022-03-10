import './MyPost.scss';
import { Post } from './Post/Post';

export const MyPost = () => {
    return (
        <div>
            My Posts
            <div className='send__message'>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <div className='my__posts'>
                <Post message='Whatsupp' />
            </div>
        </div>
        
    )
}