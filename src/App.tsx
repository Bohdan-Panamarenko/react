import SignIn from './components/SignIn/SignIn';
import Landing from './components/Landing/Landing';
import Forecast from './components/Forecast/Forecast';
import './App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import { Redirect } from 'react-router';
import { PublicRoute } from './components/Routes/PublicRoute';
import { PrivatRoute } from './components/Routes/PrivatRoute';

interface State {
  username: string,
  password: string
}

class App extends Component <{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = { 
      username: localStorage.getItem('username') ?? '',
      password: localStorage.getItem('password') ?? ''
    };
  }

  private logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.reload();
  }

  private LoginLink(props: {isLoggedIn: boolean}): React.ReactElement {
    if (!props.isLoggedIn) {
      return (
        <Link to="/login">Sign in</Link>
      );
    }
    return (
      <div id="logout-container">
        <button onClick={this.logout}>Logut</button>
      </div>
    );
  }

  private PrivateLink(props: { path: string, text: string, isLoggedIn: boolean}): React.ReactElement | undefined {
    if (props.isLoggedIn) {
      return (
        <Link to={props.path}>{props.text}</Link>
      );
    }
  }



  render() {
    const isLoggedIn = !(this.state.username === "");
    return (
      <Router>
        <nav id="app-nav">
          {this.LoginLink({ isLoggedIn: isLoggedIn})}
          <Link to="/">Landing</Link>
          {this.PrivateLink({ path: "/forecast", text: "Forecast", isLoggedIn: isLoggedIn})}
        </nav>
        <Switch>
          <PublicRoute Component={SignIn} restricted={true} isLoggedIn={isLoggedIn} path="/login" exact />
          <PrivatRoute Component={Forecast} isLoggedIn={isLoggedIn} path="/forecast" exact />
          <PublicRoute Component={Landing} restricted={false} isLoggedIn={isLoggedIn} path="/" exact />
          <Redirect to="/" exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
