import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import colors from 'colors';
import { connectDB } from './config/db';

// Load Config
dotenv.config();

const app: Express = express();

connectDB();

const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send("Hello");
});


app.listen(PORT, () => console.log(colors.yellow(`Server running on port ${PORT}`)));

