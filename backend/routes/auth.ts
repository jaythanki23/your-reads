import express from "express";
import { auth, getMe } from "../controller/auth.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();
 
router.post('/google', auth);

router.get('/me', protect, getMe);


export { router };