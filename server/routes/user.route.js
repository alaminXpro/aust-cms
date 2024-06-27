import express from 'express';
import { deleteUser, test, updateUser, getUser, getAllUsers, getUserByUsername} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/:username', verifyToken, getUserByUsername);
router.get('/:id', verifyToken, getUser);
router.get('/', verifyToken, getAllUsers);

export default router;