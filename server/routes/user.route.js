import express from 'express';
import { deleteAllUser, test, deleteUser, updateUser, getUser, getAllUsers, getUserByUsername} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.get('/test', test);
router.patch('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);
router.delete('/deleteall', verifyToken, deleteAllUser);
router.get('/', getAllUsers);
//router.get('/:username', getUserByUsername);
router.get('/:id', getUser);

export default router;