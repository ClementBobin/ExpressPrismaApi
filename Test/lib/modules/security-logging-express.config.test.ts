import { configureSecurityLogging } from '@/lib/modules/security-logging-express.config';
import { mockRequest, mockResponse } from '../../../__mocks__/test-utils';
import logger from '@/lib/docs/logger';

describe('Security Logging Middleware', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should log failed authentication attempts', (done) => {
    const middleware = configureSecurityLogging(logger);
    const req = mockRequest({ method: 'POST', originalUrl: '/auth/login' });
    const res = mockResponse();
    res.statusCode = 401;
    
    middleware(req, res, jest.fn());
    
    setTimeout(() => {
      res.emit('finish');
      
      expect(logger.logSecurityEvent).toHaveBeenCalledWith(
        'authentication_failed',
        expect.objectContaining({
          ip: expect.any(String),
          method: 'POST',
          url: '/auth/login',
        })
      );
      done();
    }, 10);
  });

  it('should log access denied events', (done) => {
    const middleware = configureSecurityLogging(logger);
    const req = mockRequest({ method: 'GET', originalUrl: '/admin' });
    const res = mockResponse();
    res.statusCode = 403;
    
    middleware(req, res, jest.fn());
    
    setTimeout(() => {
      res.emit('finish');
      
      expect(logger.logSecurityEvent).toHaveBeenCalledWith(
        'access_denied',
        expect.objectContaining({
          ip: expect.any(String),
          method: 'GET',
          url: '/admin',
        })
      );
      done();
    }, 10);
  });

  it('should log successful authentication', (done) => {
    const middleware = configureSecurityLogging(logger);
    const req = mockRequest({ 
      method: 'POST', 
      originalUrl: '/auth/login',
      headers: { authorization: 'Bearer token123' }
    });
    const res = mockResponse();
    res.statusCode = 200;
    
    middleware(req, res, jest.fn());
    
    setTimeout(() => {
      res.emit('finish');
      
      expect(logger.logSecurityEvent).toHaveBeenCalledWith(
        'authentication_success',
        expect.objectContaining({
          ip: expect.any(String),
          url: '/auth/login',
        })
      );
      done();
    }, 10);
  });

  it('should detect malformed auth headers', () => {
    const middleware = configureSecurityLogging(logger);
    const req = mockRequest({
      headers: { authorization: 'InvalidFormat' }
    });
    const res = mockResponse();
    
    middleware(req, res, jest.fn());
    
    expect(logger.logSecurityEvent).toHaveBeenCalledWith(
      'malformed_auth_header',
      expect.objectContaining({
        ip: expect.any(String),
        method: expect.any(String),
      })
    );
  });

  it('should call next middleware', () => {
    const middleware = configureSecurityLogging(logger);
    const req = mockRequest();
    const res = mockResponse();
    const next = jest.fn();
    
    middleware(req, res, next);
    
    expect(next).toHaveBeenCalled();
  });
});
