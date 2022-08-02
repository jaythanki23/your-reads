import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import { connectDB } from './config/db';
import { router as auth } from './routes/auth';
import { errorHandler } from './middleware/errorMiddleware';
import { router as read } from './routes/books';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

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
app.use('/books', read);

// Serve frontend
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  const __dirname = dirname(fileURLToPath(import.meta.url));
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'your-reads', 'frontend', 'build', 'index.html')));
}

// Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(colors.yellow(`Server running on port ${PORT}`)));

