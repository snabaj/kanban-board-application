import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    // TODO: verify the token exists and add the user data to the request object
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const secretKey = process.env.JWT_SECRET; // Ensure you have a secret key in your environment variables
        if (!secretKey) {
            throw new Error('JWT secret key is not set');
        }
        const decoded = jwt.verify(token, secretKey);
        // Attach user info to the request object
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(403).json({ message: 'Invalid or Expired Token' });
    }
};
