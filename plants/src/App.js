import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

//*Custom Components
import HomePage from './HomePage';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h1>Water My Plants</h1>
          <Link to='/'>Home</Link>
          <Link to='/sign-in'>Sign In</Link>
        </nav>
      </header>
      <Switch>
        <Route path='/sign-in'>
          <Login />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
