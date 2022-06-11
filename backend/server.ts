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

const app: Express = express();

connectDB();

const PORT = process.env.PORT;

app.use(cors());

app.use('/auth', auth);

app.listen(PORT, () => console.log(colors.yellow(`Server running on port ${PORT}`)));

