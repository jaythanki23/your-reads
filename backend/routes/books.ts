import express from "express";
import protect from "../middleware/authMiddleware";
import { read } from "../controller/books";

const router = express.Router();

router.get('/read', protect, read);

export { router };