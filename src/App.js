import './App.css';
import Home from './pages';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HeadphonesPage from './pages/headphones';
import EarphonesPage from './pages/earphones';
import SpeakersPage from './pages/speakers';
import ExplorePage from './pages/explore';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/headphones" component={ HeadphonesPage } exact />
        <Route path="/earphones" component={ EarphonesPage } exact />
        <Route path="/speakers" component={ SpeakersPage } exact />
        <Route path="/explore" component={ ExplorePage } exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
