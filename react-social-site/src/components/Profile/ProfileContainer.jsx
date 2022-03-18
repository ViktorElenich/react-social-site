import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProfile } from './../../redux/reducers';
import { compose } from 'redux';

export class ProfileAPI extends React.Component {

    componentDidMount(){
        let userId = this.props.params.userId;
        if(!userId){
            userId = 22817;
        }
        this.props.getUserProfile(userId);
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

export const ProfileContainer = compose(
    connect(mapStateToProps, {getUserProfile} ),
    withRouter
)(ProfileAPI)