import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    // TODO: verify the token exists and add the user data to the request object
    const authHeader = req.headers.authorization;
    console.log('Authenticating token...');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Access Denied: No Token Provided' });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        console.log('Verifying token...');
        const secretKey = process.env.JWT_SECRET_KEY; // Ensure you have a secret key in your environment variables
        if (!secretKey) {
            console.error('JWT secret key is not set');
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
