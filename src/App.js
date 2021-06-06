import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header'
import './App.css';
import Home from './components/Home';
import Details from './components/Detail';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path ='/'>
          <Login />
        </Route>
        <Route path ='/home'>
          <Home />
        </Route>
        <Route path ='//details/:id'>
          <Details />
n       </Route>
      </Switch>
    </Router>
  );
}

export default App;
