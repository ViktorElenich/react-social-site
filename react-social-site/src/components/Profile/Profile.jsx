import { MyPost } from './MyPost/MyPost';
import './Profile.scss';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = (props) => {
    return (
        <div className='content'>
            <ProfileInfo />
            <MyPost posts={props.profilePage.posts} 
                    dispatch={props.dispatch} 
                    newPostText={props.profilePage.newPostText} />
        </div>
    )
}