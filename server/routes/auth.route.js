import express from 'express';
import { google, signOut, signin, signup, deleteAllUser, forgotPassword, resetPassword, test} from '../controllers/auth.controller.js';

const router = express.Router();

router.get("/test", test);
router.post("/signup", signup);
router.post("/signin", signin);
router.post('/google', google);
router.post('/signout', signOut);
router.post('/deletealluser', deleteAllUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

export default router;