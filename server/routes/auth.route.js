import express from 'express';
import { google, signOut, signin, signup, deleteAllUser, test} from '../controllers/auth.controller.js';

const router = express.Router();

router.get("/test", test);
router.post("/signup", signup);
router.post("/signin", signin);
router.post('/google', google);
router.get('/signout', signOut);
router.post('/deletealluser', deleteAllUser);

export default router;