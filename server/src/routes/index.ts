import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';
//mport path from 'path';

const router = Router();

router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);

//router.get('/', (_, res) => {
    //res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  //});

//router.get('/');



export default router;
