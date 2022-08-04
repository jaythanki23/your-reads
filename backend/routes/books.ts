import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createRead, getRead, removeBook, updateBook } from "../controller/books.js";
import { createJourney, getJourney, deleteJourney, updateJourney } from "../controller/journey.js";

const router = express.Router();

router.route('/read').post(protect, createRead).get(protect, getRead);

router.route('/:id').delete(protect, removeBook).put(protect, updateBook);

router.route('/journey').post(protect, createJourney).get(protect, getJourney);

router.route('/journey/:id').delete(protect, deleteJourney).put(protect, updateJourney);

export { router };