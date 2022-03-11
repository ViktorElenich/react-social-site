import { NavLink } from 'react-router-dom';
import '../Dialogs.scss'

export const UserItem = (props) => {

    const path = '/messages/' + props.name;

    return (
        <div className="user__item">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default UserItem