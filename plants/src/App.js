import { Link, Route, Switch } from "react-router-dom";
import "./css/App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { plantsStart } from "./actions";

//*Custom Components
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import PlantsList from "./components/PlantsList";

function App(props) {
  useEffect(() => {
    props.plantsStart();
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <h1>Water My Plants</h1>
          <Link to="/">Home</Link>
          <Link to="/sign-in">Sign In</Link>
        </nav>
      </header>
      <Switch>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/plants">
          <PlantsList />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default connect(null, { plantsStart })(App);
