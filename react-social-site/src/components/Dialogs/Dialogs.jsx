import './Dialogs.scss';
import MessageItem from './MessageItem/MessageItem';
import UserItem from './UserItem/UserItem';

export const Dialogs = (props) => {
    return (
        <div className="dialogs__container">
            <div className="users__container">
                <UserItem name='Elena' />
                <UserItem name='Victor' />
                <UserItem name='Andrei' />
            </div>
            <div className="messages__container">
                <MessageItem message='Hi' />
                <MessageItem message='How are you?' />
                <MessageItem message='Whatsup' />
            </div>
        </div>
    )
}
