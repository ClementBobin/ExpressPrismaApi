import type { Request, Response, NextFunction } from 'express';
import type { Logger } from 'winston';

// Store for performance metrics
interface EndpointMetrics {
  totalRequests: number;
  totalDuration: number;
  minDuration: number;
  maxDuration: number;
  errorCount: number;
}

const metricsStore = new Map<string, EndpointMetrics>();

// Configuration for spike detection
const SPIKE_WINDOW_MS = 60000; // 1 minute window
const SPIKE_THRESHOLD = 100; // Number of requests to consider a spike
const requestCountWindow = new Map<string, { count: number; timestamp: number }>();

export const configurePerformanceMetrics = (logger: Logger) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    const endpoint = `${req.method} ${req.route?.path || req.path}`;

    // Track request count for spike detection
    const now = Date.now();
    const windowData = requestCountWindow.get(endpoint);
    
    if (!windowData || now - windowData.timestamp > SPIKE_WINDOW_MS) {
      requestCountWindow.set(endpoint, { count: 1, timestamp: now });
    } else {
      windowData.count++;
      
      // Detect spike
      if (windowData.count >= SPIKE_THRESHOLD) {
        logger.logPerformanceMetric('request_spike', windowData.count, { 
          endpoint,
          window_ms: SPIKE_WINDOW_MS 
        });
        // Reset counter after spike detection
        requestCountWindow.set(endpoint, { count: 0, timestamp: now });
      }
    }

    // Capture response end event
    res.on('finish', () => {
      const duration = Date.now() - start;
      
      // Update metrics
      let metrics = metricsStore.get(endpoint);
      if (!metrics) {
        metrics = {
          totalRequests: 0,
          totalDuration: 0,
          minDuration: duration,
          maxDuration: duration,
          errorCount: 0,
        };
        metricsStore.set(endpoint, metrics);
      }

      metrics.totalRequests++;
      metrics.totalDuration += duration;
      metrics.minDuration = Math.min(metrics.minDuration, duration);
      metrics.maxDuration = Math.max(metrics.maxDuration, duration);
      
      if (res.statusCode >= 400) {
        metrics.errorCount++;
      }

      const avgDuration = metrics.totalDuration / metrics.totalRequests;

      // Log slow endpoints (> 1 second)
      if (duration > 1000) {
        logger.logPerformanceMetric('slow_endpoint', duration, {
          endpoint,
          threshold_ms: 1000,
          average_ms: avgDuration.toFixed(2),
        });
      }

      // Log performance metrics periodically (every 100 requests)
      if (metrics.totalRequests % 100 === 0) {
        logger.logPerformanceMetric('endpoint_average_latency', avgDuration, {
          endpoint,
          total_requests: metrics.totalRequests,
          min_ms: metrics.minDuration,
          max_ms: metrics.maxDuration,
          error_rate: ((metrics.errorCount / metrics.totalRequests) * 100).toFixed(2) + '%',
        });
      }
    });

    next();
  };
};

// Export function to get current metrics (useful for monitoring endpoints)
export const getMetrics = (): Map<string, EndpointMetrics> => {
  return new Map(metricsStore);
};

// Export function to reset metrics
export const resetMetrics = (): void => {
  metricsStore.clear();
  requestCountWindow.clear();
};
