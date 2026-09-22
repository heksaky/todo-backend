import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { validateRegister, validateLogin } from '../middlewares/validator';

const router = Router();

//POST /api/auth/register — Register user baru
router.post('/register', validateRegister, register);

//POST /api/auth/login — Login user
router.post('/login', validateLogin, login);

export default router;