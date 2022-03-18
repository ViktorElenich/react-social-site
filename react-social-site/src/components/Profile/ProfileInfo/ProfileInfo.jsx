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
                <img src={props.profile.photos.large  !== null ? props.profile.photos.small : profilePhoto} alt="user" />
                <ProfileStatus status={'Hello'} />
                <div className="user_fullName">{props.profile.fullName}</div>
                <div className="user_about">{props.profile.aboutMe}</div>
                <div className="user-status_job">{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}
