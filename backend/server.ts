import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import colors from 'colors';
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';
import { connectDB } from './config/db';
import { router as auth } from './routes/auth';

// Load Config
dotenv.config();

// passport config
require('./config/passport')(passport);

const app: Express = express();

connectDB();

const PORT = process.env.PORT;

app.use(cors());

app.use('/auth', auth);

// Sessions
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


app.listen(PORT, () => console.log(colors.yellow(`Server running on port ${PORT}`)));

