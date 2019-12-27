import config from '../util/config';
import firebase from 'firebase';
import { admin, db } from '../util/admin';
import {
  validateLoginData,
} from '../util/validator';

firebase.initializeApp(config);

export function login(req, res) {
  const profile = {
    email: req.body.email,
    password: req.body.password
  };

  const { valid, errors } = validateLogin(profile);

  if (!valid) return res.status(400).json(errors);

  firebase.auth().signInWithEmailAndPassword(profile.email, profile.password)
    .then((data) => {
      return data.profile.getIdToken();
    }).then((token) => {
      return res.json({ token });
    }).catch((err) => {
      console.log(err);
      return res.status(403).json({
        general: 'Incorrect email or password'
      });
    });
}