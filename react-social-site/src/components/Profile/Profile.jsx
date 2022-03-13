import { MyPostContainer } from './MyPost/MyPostContainer';
import './Profile.scss';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = (props) => {

    return (
        <div className='content'>
            <ProfileInfo />
            <MyPostContainer store={props.store} />
        </div>
    )
}