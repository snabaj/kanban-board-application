import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = async (req, res) => {
    // TODO: If the user exists and the password is correct, return a JWT token
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user) {
            res.status(401).json({ message: 'Invalid Username or Password' });
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid Username or Password' });
            return;
        }
        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
            throw new Error('JWT secret key is not set');
        }
        const token = jwt.sign({ username: user.username, id: user.id }, secretKey, {
            expiresIn: '1h',
        });
        res.json({ token });
    }
    catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
};
const router = Router();
// POST /login - Login a user
router.post('/login', login);
export default router;
