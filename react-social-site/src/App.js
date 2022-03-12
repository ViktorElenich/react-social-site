import './App.scss';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Profile } from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Friends } from './components/Friends/Friends';
import { Music } from './components/Music/Music';
import { News } from './components/News/News.jsx';
import { Settings } from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Navigation />
        <div className='content__container'>
          <Routes>
            <Route path='/messages/*' element={<Dialogs dialogs={props.state.dialogsPage.dialog} />} />
            <Route path='/profile' element={<Profile posts={props.state.profilePage.posts} addPost={props.addPost} />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
