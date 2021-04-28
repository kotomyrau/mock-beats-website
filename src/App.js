import './App.css';
import Home from './pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeadphonesPage from './pages/headphones';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/headphones" component={ HeadphonesPage } exact />
      </Switch>
    </Router>
  );
}

export default App;
