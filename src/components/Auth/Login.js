import React, { Component } from 'react'
import { app } from '../../config/firebaseConfig'
import { Redirect } from 'react-router-dom'
import ContextUser from '../../contextUser'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Login extends Component {
    static contextType = ContextUser

    constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }
    }

    // Handle login submission
    handleSubmit = (e) => {
        e.preventDefault();
        // Sign in using firebase authentication service
        app.auth().signInWithEmailAndPassword(this.email.value, this.pass.value).then((obj) => {
            this.context.actions.updateAuth(true, null, obj.user.uid)
        }).catch((error) => {
            alert(error.message)
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        } else {
            return(
                <Paper>
                    <Typography>Login</Typography>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            ref={(email) => this.email = email}
                            required
                            id="email"
                            label="Email"
                            margin="normal"
                            type="email"
                            placeholder="Email"
                        />
                        <TextField
                            ref={(pass) => this.pass = pass}
                            required
                            id="password"
                            label="Password"
                            type="password"
                            placeholder="Password"
                        />
                        <Button variant="contained" color="primary" type="submit">Login</Button>
                    </form>
                </Paper>
            )
        }
    }
}

Login.contextType = ContextUser

export default Login