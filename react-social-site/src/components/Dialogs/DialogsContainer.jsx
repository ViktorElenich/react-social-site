import { connect } from 'react-redux';
import { sendMessageAC, updateNewMessageAC } from '../../redux/reducers';
import { Dialogs } from './Dialogs';

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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);