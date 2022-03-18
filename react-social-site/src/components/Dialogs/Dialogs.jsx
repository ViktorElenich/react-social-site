import './Dialogs.scss';
import MessageItem from './MessageItem/MessageItem';
import UserItem from './UserItem/UserItem';

export const Dialogs = (props) => {

    const users = props.dialogsPage.dialog.map( user => <UserItem name={user.name} key={user.name} />);
    const messages = props.dialogsPage.dialog.map( message => <MessageItem message={message.message} key={message.message} />);
    const newMessage = props.dialogsPage.newMessage;

    const onSendMessage = () => {
        props.onSendMessage();
    }

    const onNewMessageChange = (event) => {
        const newMessage = event.target.value;
        props.onNewMessageChange(newMessage);
    }

    return (
        <div className="dialogs__container">
            <div className="users__container">
                {users}
            </div>
            <div className="messages__container">
                <div>{messages}</div>
                <div>
                    <div>
                        <textarea value={newMessage} onChange={ onNewMessageChange } placeholder='enter your message'/>
                    </div>
                    <div>
                        <button onClick={ onSendMessage }>send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
