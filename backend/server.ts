import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import { connectDB } from './config/db';
import { router as auth } from './routes/auth';
import { errorHandler } from './middleware/errorMiddleware';

// Load Config
dotenv.config();

const app: Express = express();

connectDB();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;

app.use(cors());

app.use('/auth', auth);

// Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(colors.yellow(`Server running on port ${PORT}`)));

