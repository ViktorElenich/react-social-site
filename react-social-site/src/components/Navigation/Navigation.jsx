import './Navigation.scss';

export const Navigation = () => {
    return (
        <nav className='navigation'>
            <div className='item'>
                <a href='/profile'>Profile</a>
            </div>
            <div className='item'>
                <a href='/message'>Messages</a>
            </div>
            <div className='item'>
                <a href='/friends'>Friends</a>
            </div>
            <div className='item'>
                <a href='/news'>News</a>
            </div>
            <div className='item'>
                <a href='/music'>Music</a>
            </div>
            <div className='item'>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
}