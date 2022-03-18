import { Preloader } from '../../../common/Preloader/Preloader';
import './ProfileInfo.scss';
import profilePhoto from '../../../assets/icons/profile.png';
import { ProfileStatus } from '../ProfileStatus/ProfileStatus';

export const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    return (
        <div className='container__info'>
            <div className='img__content'></div>
            <div className='info'>
                <div className="photo_user">
                    <img src={props.profile.photos.large  !== null ? props.profile.photos.small : profilePhoto} alt="user" />
                </div>
                <div className="wrapper__user">
                    <div className="user_fullName">{props.profile.fullName}</div>
                    <ProfileStatus status={'Hello'} />
                    
                    <div className="user_about">{props.profile.aboutMe}</div>
                    <div className="user-status_job">{props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}
