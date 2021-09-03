import SignIn from './components/SignIn/SignIn';
import Landing from './components/Landing/Landing';
import Forecast from './components/Forecast/Forecast';
import './App.css';
import { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Redirect } from 'react-router';

interface State {
    username: string,
    password: string
}

class App extends Component <any, State> {
    constructor(props: any) {
        super(props);

        this.state = { 
            username: localStorage.getItem('username') ?? '',
            password: localStorage.getItem('password') ?? ''
        };
    }

    render() {
        const notLoggedIn = this.state.username === "";
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
}

export default App;
