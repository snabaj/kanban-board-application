import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = async (req, res) => {
    const { username, password } = req.body;
    console.log('Logging in user:', username);
    const user = await User.findOne({ where: { username } });
    if (!user) {
        return res.status(401).json({ message: 'Invalid Username or Password' });
    }
    console.log(user.password, password);
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        console.log('Invalid password');
        return res.status(401).json({ message: 'Invalid Username or Password' });
    }
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        console.error('JWT secret key is not set');
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h', });
    return res.json({ token });
};
const router = Router();
// POST /login - Login a user
router.post('/login', login);
export const signup = async (req, res) => {
    const { username, password } = req.body;
    console.log('Signing up user:', username);
    const newUser = await User.create({ username, password });
    if (!newUser) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        console.error('JWT secret key is not set');
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    const token = jwt.sign({ username: newUser.username }, secretKey, { expiresIn: '1h', });
    return res.json({ token });
};
router.post('/signup', signup);
export default router;
