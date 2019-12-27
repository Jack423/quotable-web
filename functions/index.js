import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';

import {
  login,
} from './handlers/profile';

const app = express();
app.use(cors());

app.post('/login', login);


