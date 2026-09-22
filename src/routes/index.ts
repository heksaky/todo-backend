import {Router} from 'express';
import authRoutes from './authRoutes';
import todoRoutes from './todoRoutes';
import {verifyToken} from '../middlewares/authMiddleware';

const router = Router();


router.use('/auth', authRoutes);
// Gunakan middleware verifyToken untuk semua route /api/todos
router.use('/todos', verifyToken, todoRoutes);

export default router;