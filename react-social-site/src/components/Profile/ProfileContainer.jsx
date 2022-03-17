import React from 'react';
import * as axios from 'axios';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/reducers';
import { useParams } from 'react-router-dom';

export class ProfileAPI extends React.Component {

    componentDidMount(){
        const userId = this.props.params.userId;
        
        console.log(this.props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => {
            //console.log(res);
            this.props.setUserProfile(res.data);
        })
    }
    render(){
        return (
            <Profile profile={this.props.profile} />
        )
    }
}
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const withRouter = (Component) => {
    const Wrapper = (props) => {
        const params = useParams();
        return (
            <Component
                params={params}
                {...props}
                />
        );
    };
    return Wrapper;
}

const WithUrlDataContainerComponent = withRouter(ProfileAPI);

export const ProfileContainer = connect(mapStateToProps, {setUserProfile} )(WithUrlDataContainerComponent)