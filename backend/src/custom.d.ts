// src/custom.d.ts

import { Request } from 'express-serve-static-core';

declare module 'express-serve-static-core' {
    interface Request {
        user?: {
            id: string;
            // Add other properties if necessary
        };
    }
}
