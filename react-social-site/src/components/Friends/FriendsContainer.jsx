import { connect } from "react-redux";
import { 
    followThunk, 
    unFollowThunk, 
    setCurrentPage, 
    setIsFollowProgress,
    getUsersThunkCreator
} from "../../redux/reducers";
import React from 'react';
import { Friends } from './Friends';
import './Friends.scss';
import { Preloader } from "../../common/Preloader/Preloader";
import { withAuthRedirect } from './../../Hoc/AuthRedirect';

export class FriendsAPI extends React.Component {
    
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize)
    }
    
    render(){        
        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <Friends totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unFollowThunk={this.props.unFollowThunk}
            followThunk={this.props.followThunk}
            setIsFollowProgress={this.props.setIsFollowProgress}
            isFollowProgress={this.props.isFollowProgress} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFollowProgress: state.usersPage.followProgress
    }
}

let withRedirect = withAuthRedirect(FriendsAPI);

export const FriendsContainer =  connect(mapStateToProps, {
    followThunk, unFollowThunk, 
    setCurrentPage, setIsFollowProgress, getUsers: getUsersThunkCreator })(withRedirect);