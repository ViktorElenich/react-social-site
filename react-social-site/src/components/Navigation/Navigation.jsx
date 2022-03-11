import './Navigation.scss';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className='navigation'>
            <div className='item'>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/messages'>Messages</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/friends'>Friends</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}