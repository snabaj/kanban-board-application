import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';
//import { getAllUsers } from '../controllers/user-controller.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);

router.get('/', (req, res) => {
    res.send('Welcome to the Express Server');
    }
);



export default router;
