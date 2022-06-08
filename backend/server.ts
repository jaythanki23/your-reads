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

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

//Routes
app.get('/', (req: Request, res: Response) => {
  res.send("Hello");
});

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

