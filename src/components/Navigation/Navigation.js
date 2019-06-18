import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../../config/firebaseConfig';
import ContextUser from '../../contextUser'
import { withRouter } from 'react-router-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Login from '../Auth/Login'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    menuButtons: {
        color: "white",
    }
})

class Navigation extends Component {
    static contextType = ContextUser;

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }

    handleLogout = () => {
        app.auth().signOut()
    }

    handleSignIn = () => {
        // <Route path="/login" render={()=> (authenticated ? <Redirect to="/"/> : <Login />)} exact/>
    }

    buttonsDisplay = () => {
        if (app.auth().currentUser) {
            return (<Button className="menuButtons" onClick={this.handleLogout}>Log Out</Button>)
        } else {
            return (<Button className="menuButtons" onClick={this.handleSignIn}>Sign In</Button>)
        }
    }

    render() {
        const { classes } = this.props
        return(
            <div className={classes.root}>
                <AppBar position='static' color='primary'>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>Quotable</Typography>
                        {this.buttonsDisplay()}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navigation);