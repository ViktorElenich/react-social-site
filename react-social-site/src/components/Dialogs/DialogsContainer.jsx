import { connect } from 'react-redux';
import { sendMessageAC, updateNewMessageAC } from '../../redux/reducers';
import { Dialogs } from './Dialogs';
import { withAuthRedirect } from './../../Hoc/AuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (newMessage) => {
            dispatch(updateNewMessageAC(newMessage));
        },
        onSendMessage: () => {
            dispatch(sendMessageAC());
        }
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);