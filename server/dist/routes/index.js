import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';
import path from 'path';
//import { getAllUsers } from '../controllers/user-controller.js';
const router = Router();
router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);
router.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
export default router;
