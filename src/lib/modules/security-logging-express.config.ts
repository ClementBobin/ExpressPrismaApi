import type { Request, Response, NextFunction } from 'express';
import type { Logger } from 'winston';

// Track failed authentication attempts by IP
const failedAuthAttempts = new Map<string, { count: number; lastAttempt: number }>();
const LOCKOUT_THRESHOLD = 5;
const LOCKOUT_WINDOW_MS = 300000; // 5 minutes

export const configureSecurityLogging = (logger: Logger) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const clientIp = req.ip || req.connection?.remoteAddress || 'unknown';
    const authHeader = req.headers['authorization'];

    // Monitor authentication attempts
    res.on('finish', () => {
      // Log failed authentication (401)
      if (res.statusCode === 401) {
        logger.logSecurityEvent('authentication_failed', {
          ip: clientIp,
          method: req.method,
          url: req.originalUrl,
          userAgent: req.headers['user-agent'],
          timestamp: new Date().toISOString(),
        });

        // Track failed attempts
        const attempts = failedAuthAttempts.get(clientIp);
        const now = Date.now();

        if (!attempts || now - attempts.lastAttempt > LOCKOUT_WINDOW_MS) {
          failedAuthAttempts.set(clientIp, { count: 1, lastAttempt: now });
        } else {
          attempts.count++;
          attempts.lastAttempt = now;

          if (attempts.count >= LOCKOUT_THRESHOLD) {
            logger.logSecurityEvent('potential_brute_force', {
              ip: clientIp,
              attempts: attempts.count,
              window_ms: LOCKOUT_WINDOW_MS,
            });
          }
        }
      }

      // Log access denied (403)
      if (res.statusCode === 403) {
        logger.logSecurityEvent('access_denied', {
          ip: clientIp,
          method: req.method,
          url: req.originalUrl,
          userAgent: req.headers['user-agent'],
          timestamp: new Date().toISOString(),
        });
      }

      // Log successful authentication for audit
      if (res.statusCode === 200 && authHeader && req.originalUrl.includes('/auth')) {
        logger.logSecurityEvent('authentication_success', {
          ip: clientIp,
          url: req.originalUrl,
          timestamp: new Date().toISOString(),
        });

        // Clear failed attempts on successful auth
        failedAuthAttempts.delete(clientIp);
      }
    });

    // Check for JWT token in header and validate basic format
    if (authHeader) {
      const parts = authHeader.split(' ');
      
      if (parts.length !== 2 || parts[0] !== 'Bearer') {
        logger.logSecurityEvent('malformed_auth_header', {
          ip: clientIp,
          method: req.method,
          url: req.originalUrl,
        });
      }
    }

    next();
  };
};

// Export function to manually log permission changes
export const logPermissionChange = (logger: Logger, userId: string, changes: Record<string, any>): void => {
  logger.logSecurityEvent('permission_update', {
    userId,
    changes,
    timestamp: new Date().toISOString(),
  });
};

// Export function to log certificate/encryption events
export const logCertificateEvent = (logger: Logger, eventType: string, details: Record<string, any>): void => {
  logger.logSecurityEvent(`certificate_${eventType}`, {
    ...details,
    timestamp: new Date().toISOString(),
  });
};
