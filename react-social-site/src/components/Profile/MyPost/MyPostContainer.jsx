import { connect } from 'react-redux';
import { addPostAC, updatePostAC } from '../../../redux/reducers';
import { MyPost } from './MyPost';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updatePostAC(text));
        },
        addPost: () => {
            dispatch(addPostAC());
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);