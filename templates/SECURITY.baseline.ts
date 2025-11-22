import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

export const securityConfig = {
  helmet: helmet(),
  rateLimiter: rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  }),
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }
};

export const validateInput = (input: any) => {
  // Basic sanitization logic
  if (typeof input === 'string') {
    return input.replace(/<[^>]*>?/gm, '');
  }
  return input;
};
