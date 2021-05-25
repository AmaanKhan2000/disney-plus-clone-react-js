import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path ='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
