import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setUsersTotalCount, setIsFetching  } from "../../redux/reducers";
import React from 'react';
import axios from 'axios';
import { Friends } from './Friends';
import './Friends.scss';
import { Preloader } from "../../common/Preloader/Preloader";

export class FriendsAPI extends React.Component {
    
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setIsFetching(false);
            this.props.setUsers(res.data.items)
            this.props.setUsersTotalCount(res.data.totalCount)
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(res => {
            this.props.setIsFetching(false);
            this.props.setUsers(res.data.items);
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
            follow={this.props.follow} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const FriendsContainer =  connect(mapStateToProps, {follow, setUsers, unfollow, setCurrentPage, setUsersTotalCount, setIsFetching })(FriendsAPI);