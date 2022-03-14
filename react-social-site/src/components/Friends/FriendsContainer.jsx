import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC  } from "../../redux/reducers";
import { Friends } from "./Friends";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageCount: state.usersPage.pageCount,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export const FriendsContainer =  connect(mapStateToProps, mapStateToDispatch)(Friends);