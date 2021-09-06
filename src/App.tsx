import SignIn from './components/SignIn/SignIn';
import Landing from './components/Landing/Landing';
import Forecast from './components/Forecast/Forecast';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import { Redirect } from 'react-router';
import { PrivatRoute } from './components/Routes/PrivatRoute';
import { PublicRoute } from './components/Routes/PublicRoute';

export default function App() {
  const username = localStorage.getItem('username') ?? '' ;
  const isLoggedIn = !(username === "");


  const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.reload();
  }

  function LoginLink(props: {isLoggedIn: boolean}): React.ReactElement {
    if (!props.isLoggedIn) {
      return (
        <Link to="/login">Sign in</Link>
      );
    }
    return (
      <div id="logout-container">
        <button onClick={logout}>Logut</button>
      </div>
    );
  }

  function PrivateLink(props: { path: string, text: string, isLoggedIn: boolean}): React.ReactElement | undefined {
    if (props.isLoggedIn) {
      return (
        <Link to={props.path}>{props.text}</Link>
      );
    }
  }



  return (
    <Router>
      <nav id="app-nav">
        {LoginLink({ isLoggedIn: isLoggedIn})}
        <Link to="/">Landing</Link>
        {PrivateLink({ path: "/forecast", text: "Forecast", isLoggedIn: isLoggedIn})}
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
