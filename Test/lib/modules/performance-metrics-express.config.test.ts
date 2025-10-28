import { configurePerformanceMetrics, resetMetrics } from '@/lib/modules/performance-metrics-express.config';
import { mockRequest, mockResponse } from '../../../__mocks__/test-utils';
import logger from '@/lib/docs/logger';

describe('Performance Metrics Middleware', () => {
  beforeEach(() => {
    resetMetrics();
    jest.clearAllMocks();
  });

  it('should track request duration', (done) => {
    const middleware = configurePerformanceMetrics(logger);
    const req = mockRequest({ method: 'GET', path: '/test' });
    const res = mockResponse();
    
    middleware(req, res, jest.fn());
    
    setTimeout(() => {
      res.emit('finish');
      done();
    }, 10);
  });

  it('should log slow endpoints', (done) => {
    const middleware = configurePerformanceMetrics(logger);
    const req = mockRequest({ method: 'GET', path: '/test' });
    const res = mockResponse();
    
    middleware(req, res, jest.fn());
    
    setTimeout(() => {
      res.emit('finish');
      
      // Check that logPerformanceMetric was called for slow endpoint
      expect(logger.logPerformanceMetric).toHaveBeenCalled();
      done();
    }, 1100); // Simulate slow request > 1 second
  });

  it('should track error count', (done) => {
    const middleware = configurePerformanceMetrics(logger);
    const req = mockRequest({ method: 'GET', path: '/test' });
    const res = mockResponse();
    res.statusCode = 500;
    
    middleware(req, res, jest.fn());
    
    setTimeout(() => {
      res.emit('finish');
      done();
    }, 10);
  });

  it('should call next middleware', () => {
    const middleware = configurePerformanceMetrics(logger);
    const req = mockRequest();
    const res = mockResponse();
    const next = jest.fn();
    
    middleware(req, res, next);
    
    expect(next).toHaveBeenCalled();
  });
});
