import type { ErrorRequestHandler } from 'express';
import type { Logger } from 'winston';

export const configureErrorHandler = (logger: Logger): ErrorRequestHandler => {
  return (error, req, res, _next) => {
    // Extract request context for error logging
    const context = {
      requestId: req.requestId,
      method: req.method,
      url: req.originalUrl,
      ip: req.ip || req.connection?.remoteAddress,
      userAgent: req.headers['user-agent'],
    };
    
    logger.logWithErrorHandling('Unhandled error occurred', error, false, 'error', context);
    
    res.status(500).json({
      isSuccess: false,
      message: 'Internal server error',
      error: error.message
    });
  };
};