import './Header.scss';

export const Header = () => {
    return (
        <header className='header'>
            <img src={require('../../assets/logo/logo.png')} alt='logo'></img>
        </header>
    )
}