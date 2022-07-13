import express from "express";
import protect from "../middleware/authMiddleware";
import { createRead, getRead, removeBook, updateBook } from "../controller/books";

const router = express.Router();

router.route('/read').post(protect, createRead).get(protect, getRead);

router.route('/:id').delete(protect, removeBook).put(protect, updateBook);

export { router };