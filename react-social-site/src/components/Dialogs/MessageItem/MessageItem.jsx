import '../Dialogs.scss';

export const MessageItem = (props) => {
    return (
        <div className="message__item">{props.message}</div>
    )
}

export default MessageItem