import { connect } from "react-redux";
import { 
    follow, 
    setUsers, 
    unfollow, 
    setCurrentPage, 
    setUsersTotalCount, 
    setIsFetching, 
    setIsFollowProgress,
    getUsersThunkCreator
} from "../../redux/reducers";
import React from 'react';
import { Friends } from './Friends';
import './Friends.scss';
import { Preloader } from "../../common/Preloader/Preloader";
import { getUsers } from "../../api/api";

export class FriendsAPI extends React.Component {
    
    componentDidMount() {
        this.props.setIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(res => {
            this.props.setIsFetching(false);
            this.props.setUsers(res.items)
            this.props.setUsersTotalCount(res.totalCount)
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.setIsFetching(true);
        getUsers(page, this.props.pageSize).then(res => {
            this.props.setIsFetching(false);
            this.props.setUsers(res.items);
        })
    }
    
    render(){        
        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <Friends totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
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
        isFetching: state.usersPage.isFetching,
        isFollowProgress: state.usersPage.followProgress

    }
}

export const FriendsContainer =  connect(mapStateToProps, {
    follow, setUsers, unfollow, 
    setCurrentPage, setUsersTotalCount, 
    setIsFetching, setIsFollowProgress, getUsersThunkCreator })(FriendsAPI);