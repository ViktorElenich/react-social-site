import './App.scss';
import { Navigation } from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FriendsContainer } from './components/Friends/FriendsContainer';
import { Music } from './components/Music/Music';
import { News } from './components/News/News.jsx';
import { Settings } from './components/Settings/Settings';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='container'>
        <HeaderContainer />
        <Navigation />
        <div className='content__container'>
          <Routes>
            <Route path='/messages/*' element={<DialogsContainer store={props.store} />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/friends' element={<FriendsContainer />} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
