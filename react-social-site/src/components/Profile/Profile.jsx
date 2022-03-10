import { MyPost } from './MyPost/MyPost';
import './Profile.scss';

export const Profile = () => {
    return (
        <div className='content'>
            <div className='img__content'></div>
            <MyPost />
        </div>
    )
}