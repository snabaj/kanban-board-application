import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  // TODO: verify the token exists and add the user data to the request object
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Access Denied: No Token Provided' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const secretKey = process.env.JWT_SECRET_KEY as string; // Ensure you have a secret key in your environment variables
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