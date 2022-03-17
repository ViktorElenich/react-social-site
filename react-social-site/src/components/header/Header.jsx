import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
    return (
        <header className='header'>
            <img src={require('../../assets/logo/logo.png')} alt='logo'></img>
            <div className="login_auth">
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}