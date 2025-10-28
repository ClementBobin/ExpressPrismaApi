/* eslint-disable no-unused-vars */
import winston from 'winston'; // Import winston for logging
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs
import DailyRotateFile from 'winston-daily-rotate-file'; // Import DailyRotateFile for log rotation

const dateFormat = process.env.DATE_FORMAT || 'YYYY-MM-DD HH:mm:ss';
const storageDateFormat = process.env.STORAGE_DATE_PATTERNS || 'YYYY-MM';
const unixFormat = process.env.UNIX_FORMAT === 'true';
const logLevel = process.env.LOG_LEVEL || 'info';
const logFileEnabled = process.env.LOG_TO_FILE === 'true';
const keepLogsInProd = process.env.KEEP_LOGS_IN_PROD === 'true';
const logDirectory = process.env.LOG_DIRECTORY || './logs';
const nodeEnv = process.env.NODE_ENV || 'development';
const keepLogsFor = process.env.KEEP_LOGS_FOR || '90d';

// Define custom colors for log levels
const customColors = {
  trace: 'blue',
  debug: 'cyan',
  info: 'green',
  warn: 'yellow',
  error: 'magenta',
  crit: 'black',
  fatal: 'red'
};

// Define custom log levels
const logLevels = {
  trace: 6,
  debug: 5,
  info: 4,
  warn: 3,
  error: 2,
  crit: 1,
  fatal: 0
} as const; // Ensure TypeScript treats this as a fixed object

// Create a logger instance with custom log levels
const logger = winston.createLogger({ levels: logLevels });

// Check if logs should be output to the console
logger.add(new winston.transports.Console({
  level: logLevel, // Set default log level
  format: winston.format.combine(
    winston.format.colorize(), // Add colorization to logs
    winston.format.timestamp({ format: dateFormat }), // Add timestamp in specified format
    winston.format.printf(({ timestamp, level, message }) => {
      // Optionally add Unix timestamp
      const unixTime = unixFormat ? ` ${Math.floor(new Date(timestamp as string).getTime() / 1000)}` : '';
      return `[${timestamp}${unixTime}] ${level}: ${message}`; // Format log message
    }),
  ),
}));

// Check if logs should be output to a file and if logs should be kept in production
if (logFileEnabled && !(nodeEnv == 'production' && keepLogsInProd == false)) {
  logger.add(new DailyRotateFile({
    level: logLevel, // Set log level
    dirname: logDirectory, // Directory from .env
    filename: '%DATE%.log', // Filename pattern: LOG-YYYY-MM-DD.log
    datePattern: storageDateFormat, // Rotate log files daily
    zippedArchive: true, // Compress old logs (e.g., .gz)
    maxFiles: `${keepLogsFor}`, // Retain logs for the last 90 days
    format: winston.format.combine(
      winston.format.timestamp({ format: dateFormat }), // Add timestamp in specified format
      winston.format.printf(({ timestamp, level, message }) => {
        // Optionally add Unix timestamp
        const unixTime = unixFormat ? ` ${Math.floor(new Date(timestamp as string).getTime() / 1000)}` : '';
        return `[${timestamp}${unixTime}] ${level}: ${message}`; // Format log message
      })
    ),
  }));
}

// Add custom colors to winston
winston.addColors(customColors);

// Extend the Logger interface to include custom methods
declare module 'winston' {
  interface Logger {
    logWithErrorHandling(msg: any, error: any, hasSecret?: boolean, level?: string, context?: Record<string, any>): void; // Method to log errors with handling
    routeStart(req: any): string; // Method to log the start of a route
    routeEnd(req: any, res: any, id: string, durationInMs: number): void; // Method to log the end of a route
    trackOperationTime<T>(operation: Promise<T>, operationName: string): Promise<T>; // Method to track operation time
    logSecurityEvent(eventType: string, details: Record<string, any>): void; // Method to log security events
    logBusinessAction(action: string, userId?: string, details?: Record<string, any>): void; // Method to log business actions
    logPerformanceMetric(metric: string, value: number, context?: Record<string, any>): void; // Method to log performance metrics
  }
}

// Implement routeStart method to log the start of a route
logger.routeStart = function (req: any): string {
  const requestId = uuidv4(); // Generate a unique ID for the request
  req.requestId = requestId; // Attach requestId to the request object

  // Extract client IP (considering proxy)
  const clientIp = req.ip || req.connection?.remoteAddress || 'unknown';
  
  // Extract relevant headers
  const userAgent = req.headers['user-agent'] || 'unknown';
  const authHeader = req.headers['authorization'] ? 'Bearer ***' : 'none'; // Mask actual token
  const contentLength = req.headers['content-length'] || '0';
  
  // Log request start with comprehensive details
  logger.info(`[HTTP Request Start] ${req.method} ${req.originalUrl} | Request ID: ${requestId} | Client IP: ${clientIp} | User-Agent: ${userAgent} | Auth: ${authHeader} | Content-Length: ${contentLength}bytes`);

  return requestId; // Return request ID for later use in routeEnd
};

// Implement routeEnd method to log the end of a route
logger.routeEnd = function (req: any, res: any, id: string, durationInMs: number): void {
  const statusCode = res.statusCode; // Get the status code
  const clientIp = req.ip || req.connection?.remoteAddress || 'unknown';
  
  // Calculate response size from content-length header if available
  const responseSize = res.getHeader('content-length') || 'unknown';
  
  // Determine log level based on status code
  const logLevel = statusCode >= 500 ? 'error' : statusCode >= 400 ? 'warn' : 'info';
  
  // Log request end with comprehensive details
  logger.log(logLevel, `[HTTP Request End] ${req.method} ${req.originalUrl} | Request ID: ${id} | Status: ${statusCode} | Duration: ${durationInMs.toFixed(2)}ms | Client IP: ${clientIp} | Response Size: ${responseSize}bytes`);
};

// Implement logWithErrorHandling method to handle errors properly
logger.logWithErrorHandling = function(msg: any, error: any, hasSecret: boolean = false, level: string = 'error', context?: Record<string, any>): void {
  if (hasSecret && nodeEnv !== 'development') {
    return; // Do not log if hasSecret is true and not in development environment
  } else {
    // Build error log with context
    let logMessage = msg;
    
    // If the message is an error, log the stack trace
    if (error instanceof Error) {
      logMessage = `${msg} | Error Type: ${error.name} | Message: ${error.message}`;
      
      // Add stack trace in development or for critical errors
      if (nodeEnv === 'development' || level === 'fatal' || level === 'crit') {
        logMessage += ` | Stack: ${error.stack}`;
      }
    } else {
      logMessage = `${msg} | Error Details: ${JSON.stringify(error)}`;
    }
    
    // Add context if provided
    if (context) {
      logMessage += ` | Context: ${JSON.stringify(context)}`;
    }
    
    this.log(level, logMessage);
  }
};

// Implement trackOperationTime method to track the time taken by an operation
logger.trackOperationTime = async function<T>(operation: Promise<T>, operationName: string): Promise<T> {
  const start = process.hrtime(); // Start time

  // Get the stack trace to extract file and function name
  const stack = new Error().stack || '';
  const stackLines = stack.split('\n');
  const callerLine = stackLines[2] || ''; // The 2nd line of the stack trace is where the function was called from

  // Extract file and function name from the stack trace line
  const match = callerLine.match(/at\s+([^(]+)\s+\(([^:]+):(\d+):(\d+)\)/);
  const functionName = match ? match[1] : 'unknownFunction';
  const fileName = match ? match[2] : 'unknownFile';

  const result = await operation; // Await the operation
  const end = process.hrtime(); // End time
  const durationInMs = (end[0] * 1e9 + end[1] - (start[0] * 1e9 + start[1])) / 1e6; // Calculate duration in milliseconds

  // Log the operation with the file and function name
  logger.info(`${operationName} took ${durationInMs}ms, called from ${functionName} in ${fileName}`);

  return result; // Return the result of the operation
};

// Implement logSecurityEvent method to log security-related events
logger.logSecurityEvent = function(eventType: string, details: Record<string, any>): void {
  const sanitizedDetails = { ...details };
  
  // Sanitize sensitive information
  if (sanitizedDetails.token) {
    sanitizedDetails.token = '***REDACTED***';
  }
  if (sanitizedDetails.password) {
    sanitizedDetails.password = '***REDACTED***';
  }
  
  const detailsStr = JSON.stringify(sanitizedDetails);
  logger.warn(`[SECURITY EVENT] Type: ${eventType} | Details: ${detailsStr}`);
};

// Implement logBusinessAction method to log business actions for audit
logger.logBusinessAction = function(action: string, userId?: string, details?: Record<string, any>): void {
  const userInfo = userId ? `User ID: ${userId}` : 'User: Unknown';
  const detailsStr = details ? ` | Details: ${JSON.stringify(details)}` : '';
  
  logger.info(`[BUSINESS ACTION] Action: ${action} | ${userInfo}${detailsStr}`);
};

// Implement logPerformanceMetric method to log performance metrics
logger.logPerformanceMetric = function(metric: string, value: number, context?: Record<string, any>): void {
  const contextStr = context ? ` | Context: ${JSON.stringify(context)}` : '';
  
  logger.info(`[PERFORMANCE METRIC] Metric: ${metric} | Value: ${value}${contextStr}`);
};

export default logger; // Export the logger instance