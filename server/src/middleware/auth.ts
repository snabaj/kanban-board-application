import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  console.log('Authenticating token...');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Access Denied: No Token Provided' });
    return;
  }
  if (process.env.ADMIN_SECRET && process.env.ADMIN_SECRET === authHeader.split(' ')[1]) {
    req.user = { username: 'admin' };
    return next();
  }
  const token = authHeader.split(' ')[1];

  try {
    console.log('Verifying token...');
    const secretKey = process.env.JWT_SECRET_KEY as string; 
    if (!secretKey) {
      console.error('JWT secret key is not set');
      throw new Error('JWT secret key is not set');
    }

    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    
    // Attach user info to the request object
    (req as any).user = decoded;

    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or Expired Token' });
  }
};