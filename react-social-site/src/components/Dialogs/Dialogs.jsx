import './Dialogs.scss';
import MessageItem from './MessageItem/MessageItem';
import UserItem from './UserItem/UserItem';

export const Dialogs = (props) => {
    const users = props.dialogs.map( user => <UserItem name={user.name} />);
    const messages = props.dialogs.map( message => <MessageItem message={message.message} />);

    return (
        <div className="dialogs__container">
            <div className="users__container">
                {users}
            </div>
            <div className="messages__container">
                {messages}
            </div>
        </div>
    )
}
