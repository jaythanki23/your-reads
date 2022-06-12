import express from "express";
import { auth, getMe } from "../controller/auth";
import protect from "../middleware/authMiddleware";

const router = express.Router();
 
router.post('/google', auth);

router.get('/me', protect, getMe);


export { router };