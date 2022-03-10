import './App.scss';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Profile } from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Navigation />
        <div className='content__container'>
          <Routes>
            <Route path='/message' component={Dialogs} />
            <Route path='/profile' component={Profile} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
