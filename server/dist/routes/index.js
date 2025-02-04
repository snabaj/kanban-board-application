import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';
const router = Router();
router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);
router.get('/', (_req, res) => {
    res.json({ message: 'Welcome to the Ticketing System API' });
});
export default router;
