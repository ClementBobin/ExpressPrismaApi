import { Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';

export const mockRequest = (options: Partial<Request> = {}): Request => {
  return {
    headers: {},
    method: 'GET',
    originalUrl: '/test',
    params: {},
    body: {},
    ...options,
  } as Request;
};

export const mockResponse = (options: Partial<Response> = {}): Response => {
  const eventHandlers: Record<string, Function[]> = {};
  
  const res: Partial<Response> = {
    json: jest.fn().mockReturnThis(),
    status: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
    setHeader: jest.fn(),
    removeHeader: jest.fn(),
    getHeader: jest.fn(),
    on: jest.fn((event: string, handler: Function) => {
      if (!eventHandlers[event]) {
        eventHandlers[event] = [];
      }
      eventHandlers[event].push(handler);
      return res as Response;
    }),
    emit: jest.fn((event: string, ...args: any[]) => {
      if (eventHandlers[event]) {
        eventHandlers[event].forEach(handler => handler(...args));
      }
      return true;
    }),
    statusCode: 200,
    ...options,
  } as any;
  return res as Response;
};

export const mockNext = (): NextFunction => jest.fn();

export const mockLogger = (): Logger => {
  const logger = jest.createMockFromModule<typeof import('../src/lib/docs/logger')>('../src/lib/docs/logger').default;

  logger.info = jest.fn();
  logger.error = jest.fn();
  logger.warn = jest.fn();
  logger.log = jest.fn();
  logger.logWithErrorHandling = jest.fn();
  logger.routeStart = jest.fn().mockReturnValue('mock-request-id');
  logger.routeEnd = jest.fn();
  logger.trackOperationTime = jest.fn(async (operation: Promise<any>) => await operation);
  logger.logSecurityEvent = jest.fn();
  logger.logBusinessAction = jest.fn();
  logger.logPerformanceMetric = jest.fn();

  return logger;
};