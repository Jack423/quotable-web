import { LOADING_UI, LOADING_PROFILE, SET_PROFILE, CLEAR_ERRORS, SET_ERRORS, SET_UNAUTHENTICATED } from '../types';
import axios from 'axios';

export const login = (profileData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios.post('/login', profileData).then(res => {
    setAuthorizationHeader(res.data.token);
    dispatch(getProfileData());
    dispatch({ type: CLEAR_ERRORS });
    history.push('/');
  }).catch(err => {
    dispatch({
      type: SET_ERRORS,
      payload: err.res.data,
    });
  });
}

export const logoutProfile = () => (dispatch) => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
}

export const getProfileData = () => (dispatch) => {
  dispatch({ type: LOADING_PROFILE });
  axios.get('/profile').then(res => {
    dispatch({
      type: SET_PROFILE,
      payload: res.data
    });
  }).catch(err => console.log(err));
}

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};