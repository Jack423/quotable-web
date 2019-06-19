import React, { Component } from 'react'
import { app } from '../../config/firebaseConfig'
import { Redirect } from 'react-router-dom'
import ContextUser from '../../contextUser'
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import Snackbar from '@material-ui/core/Snackbar'
// import SnackbarContent from '@material-ui/core/Snackbar'
// import ErrorIcon from '@material-ui/icons/Error'

import GoogleLogin from 'react-google-login'

const styles = theme => ({
    card: {
        minWidth: "auto",
        maxWidth: 500,
        margin: "auto",
        marginTop: 25,
    },
    googleSignIn: {
        marginLeft: theme.spacing(2)
    },
    title: {
        textAlign: 'center',
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        fontSize: 24,
        fontFace: "bold",
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRigh: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    }
})

class Login extends Component {
    static contextType = ContextUser
    //static provider = app.auth.GoogleAuthProvider()

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
            console.log("User signed in")
        }).catch((error) => {
            alert(error.message)
        })
    }

    render() {
        const { classes } = this.props

        const handleGoogleSignIn = (response) => {
            this.context.actions.updateAuth(true, null, response.uid)
        }

        const handleGoogleSignInFailure = (response) => {
            console.log(response)
        }

        if (this.state.redirect) {
            return <Redirect to="/" />
        } else {
            return(
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={12}>
                        <Typography className={classes.title}>Login</Typography>
                        <GoogleLogin
                            className={classes.googleSignIn}
                            clientId="521714104273-cndalm6rplbttjch09cc3j8m71p7m0rs.apps.googleusercontent.com"
                            buttonText="LOGIN WITH GOOGLE"
                            onSuccess={handleGoogleSignIn}
                            onFailure={handleGoogleSignInFailure}
                        />
                        <form onSubmit={this.handleSubmit} className={classes.form}>
                                <TextField className={classes.textField}
                                    ref={(email) => this.email = email}
                                    required
                                    id="outlined-email-input"
                                    label="Email"
                                    margin="normal"
                                    variant="outlined"
                                    type="email"
                                    placeholder="Email"
                                /> <br/>
                                <TextField className={classes.textField}
                                    ref={(pass) => this.pass = pass}
                                    required
                                    id="password"
                                    label="Password"
                                    type="password"
                                    placeholder="Password"
                                    variant="outlined"
                                /> <br/>
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className={classes.button}>Login</Button>
                            </form>
                    </Grid>
                </Grid>
            )
        }
    }
}

Login.contextType = ContextUser

export default withStyles(styles)(Login)