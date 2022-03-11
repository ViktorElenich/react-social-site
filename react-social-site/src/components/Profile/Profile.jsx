import { MyPost } from './MyPost/MyPost';
import './Profile.scss';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = () => {
    return (
        <div className='content'>
            <ProfileInfo />
            <MyPost />
        </div>
    )
}