import './App.scss';
import { Header } from './components/header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Profile } from './components/Profile/Profile';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Navigation />
      <Profile />
    </div>
  )
}

export default App;
