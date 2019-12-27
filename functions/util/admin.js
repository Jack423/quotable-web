import config from './config';

const admin = require('firebase-admin');
initializeApp(config);

const db = admin.firestore()

export { admin, db };