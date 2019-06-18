import React, { Component } from 'react';
import { app } from './config/firebaseConfig';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import './App.css';

import ContextUser from './contextUser';
import Home from './views/home/Home'
import Login from './components/Auth/Login'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            uid: null,
            authenticated: false,
            loading: true
        }
    }

    componentWillMount = () => {
        app.auth().onAuthStateChanged(authUser => {
            if(authUser) {
                this.setState({
                    uid: authUser.uid,
                    authenticated: true,
                    loading: false
                });
            } else {
                this.setState({
                    user: null,
                    authenticated: false,
                    loading: false,
                    uid: null
                });
            }
        });
    }

    // callback for updating auth
    updateAuth = (bool) => {
        //this.setState({authenticated: bool});
    }

    updateUsername = (user) => {
        //this.setState({username: user});
    }

    updateAuthUsername = (bool, user, uid) => {
        this.setState({
            authenticated: bool,
            user: user,
            uid: uid
        });
    }

    render() {
        const { authenticated, uid, loading } = this.state;

        if (loading) {
            return null;
        }

        return(
                <ContextUser.Provider value={{
                    state: { authenticated: authenticated },
                    actions: { updateUsername: this.updateUsername, updateAuth: this.updateAuth, updateAuthUsername: this.updateAuthUsername }
                }}>
                    <Navigation />
                    
                    <Switch>
                        <Route path="/login" render={() => (authenticated ? <Redirect to="/" /> : <Login />)} exact/>
                        <Route path="/home" render={()=> <Home /> } exact/>
                    </Switch>
                    
                </ContextUser.Provider>
        );
    }
}

export default App 