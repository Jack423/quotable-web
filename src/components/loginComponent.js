import React from 'react';
import {
  Grid,
  Typography,
  Button,
  Fade,
  TextField
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/profileActions';

function LoginComponent(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  var state = React.useState({
    email: '',
    password: '',
    errors: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    const profileData = {
      email: state.email,
      password: state.password
    };
    dispatch(login(profileData, props.history));
  }

  function handleChange(event) {
    state = ({
      [event.target.name]: event.target.value
    });
  }

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <Typography className={classes.logotypeText}>Quotable</Typography>
        {/* <Typography variant="h4" className={classes.logoSubtitle}></Typography> */}
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Typography variant="h4" className={classes.greeting}>
            Sign In
          </Typography>
          <Fade in={state.errors}>
            <Typography color="secondary" className={classes.errorMessage}>
              {state.errors}
            </Typography>
          </Fade>
          <TextField
            type="email"
            label="Email"
            error={state.errors}
            margin="normal"
            fullWidth={true}
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            type="password"
            label="Password"
            error={state.errors}
            margin="normal"
            fullWidth={true}
            variant="outlined"
            onChange={handleChange}
          />
          <div className={classes.formButtons}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Button
              color="primary"
              size="large"
              className={classes.forgetButton}
            >Forgot password</Button>
          </div>
          <Typography
            className={classes.signUpText}
          >Don't have an account? <Link to={'/signup'}>Sign up</Link></Typography>
        </div>
      </div>
    </Grid>
  )
}

export default LoginComponent;