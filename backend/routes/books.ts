import express from "express";
import protect from "../middleware/authMiddleware";
import { createRead, getRead, removeBook, updateBook } from "../controller/books";
import { createJourney, getJourney, deleteJourney, updateJourney } from "../controller/journey";

const router = express.Router();

router.route('/read').post(protect, createRead).get(protect, getRead);

router.route('/:id').delete(protect, removeBook).put(protect, updateBook);

router.route('/journey').post(protect, createJourney).get(protect, getJourney);

router.route('/journey/:id').delete(protect, deleteJourney).put(protect, updateJourney);

export { router };