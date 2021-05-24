import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path ='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
