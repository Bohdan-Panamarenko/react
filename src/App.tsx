import SignIn from './components/SignIn/SignIn';
import Landing from './components/Landing/Landing';
import Forecast from './components/Forecast/Forecast';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Redirect } from 'react-router';

export default function App() {
    const username = localStorage.getItem('username') ?? '' ;
    const notLoggedIn = username === "";
    
    return (
    <Router>
        <Switch>

        { notLoggedIn && <Route path="/login">

            <SignIn />

        </Route> }

        { !notLoggedIn && <Route path="/forecast">
            
            <Forecast />

        </Route>}

        <Route exact path="/">

            <Landing />

        </Route>

        <Redirect to="/"/>

        </Switch>
    </Router>
    );
}
