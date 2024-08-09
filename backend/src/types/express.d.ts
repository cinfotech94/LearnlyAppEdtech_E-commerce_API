import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: { id: string }; // Adjust according to your user object
    }
  }
}
