import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Define an interface for your JWT payload
interface TokenPayload extends JwtPayload {
    user?: any; // Replace 'any' with a more specific type if possible
}

// Extend Request with an optional user property
interface AuthRequest extends Request {
    user?: any;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        // Verify and decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;

        // Attach the decoded user to the request object
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

export default authMiddleware;
