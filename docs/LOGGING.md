# Comprehensive Logging Documentation

This document describes the comprehensive logging features implemented in the ExpressPrismaApi application.

## Overview

The application implements a multi-layered logging system that captures:
- HTTP requests and responses
- Security events
- Performance metrics
- Business actions
- Error handling with context

## Configuration

Logging is configured via environment variables in your `.env` file:

```env
LOG_DIRECTORY=./logs
LOG_LEVEL=debug
LOG_TO_FILE=true
LOG_TO_CONSOLE=true
DATE_FORMAT=YYYY-MM-DD HH:mm:ss
UNIX_FORMAT=true
KEEP_LOGS_FOR=90d
KEEP_LOGS_IN_PROD=true
NODE_ENV=development
```

## HTTP Request Logging

### Features
Every HTTP request is automatically logged with the following information:

**Request Start:**
- HTTP method (GET, POST, PUT, DELETE, etc.)
- URL requested
- Client IP address
- User-Agent header
- Authorization type (masked for security)
- Content-Length

**Request End:**
- HTTP status code (200, 404, 500, etc.)
- Response time (in milliseconds)
- Response size (in bytes)
- Client IP address

### Log Format Example

```
[2025-10-28 14:13:29] info: [HTTP Request Start] GET /api/users | Request ID: 123e4567-e89b-12d3-a456-426614174000 | Client IP: 192.168.1.1 | User-Agent: Mozilla/5.0... | Auth: Bearer *** | Content-Length: 0bytes

[2025-10-28 14:13:30] info: [HTTP Request End] GET /api/users | Request ID: 123e4567-e89b-12d3-a456-426614174000 | Status: 200 | Duration: 45.23ms | Client IP: 192.168.1.1 | Response Size: 1024bytes
```

### Correlation ID
Each request is assigned a unique correlation ID (requestId) that can be used to trace the request through the entire system.

## Error Logging

### Features
Errors are logged with comprehensive context:
- Error type/exception name
- Detailed error message
- Stack trace (in development or for critical errors)
- Request context (method, URL, IP, User-Agent)
- Correlation ID

### Log Format Example

```
[2025-10-28 14:13:30] error: Unhandled error occurred | Error Type: ValidationError | Message: Invalid input | Stack: Error: Invalid input... | Context: {"requestId":"123e4567-e89b-12d3-a456-426614174000","method":"POST","url":"/api/users","ip":"192.168.1.1","userAgent":"Mozilla/5.0..."}
```

## Security Event Logging

### Features
The application logs various security events:

1. **Authentication Failures (401)**
   - IP address
   - URL attempted
   - User-Agent
   - Timestamp

2. **Access Denied (403)**
   - IP address
   - URL attempted
   - User-Agent
   - Timestamp

3. **Successful Authentication**
   - IP address
   - URL
   - Timestamp

4. **Malformed Auth Headers**
   - Detects improperly formatted Authorization headers
   - IP address
   - Method and URL

5. **Brute Force Detection**
   - Tracks failed authentication attempts per IP
   - Logs potential brute force attacks (5+ failed attempts in 5 minutes)

### Log Format Example

```
[2025-10-28 14:13:30] warn: [SECURITY EVENT] Type: authentication_failed | Details: {"ip":"192.168.1.1","method":"POST","url":"/auth/login","userAgent":"Mozilla/5.0...","timestamp":"2025-10-28T14:13:30.123Z"}

[2025-10-28 14:13:35] warn: [SECURITY EVENT] Type: potential_brute_force | Details: {"ip":"192.168.1.1","attempts":5,"window_ms":300000}
```

### Manual Security Logging

You can manually log security events:

```typescript
import logger from '@/lib/docs/logger';

// Log a permission change
logger.logSecurityEvent('permission_update', {
  userId: 'user123',
  changes: { role: 'admin' },
  timestamp: new Date().toISOString(),
});

// Log certificate events
logger.logSecurityEvent('certificate_expired', {
  domain: 'example.com',
  expiryDate: '2025-12-31',
  timestamp: new Date().toISOString(),
});
```

## Performance Metrics

### Features
The application automatically tracks performance metrics:

1. **Slow Endpoint Detection**
   - Logs requests that take > 1 second
   - Includes average latency for comparison

2. **Average Latency Tracking**
   - Calculates average response time per endpoint
   - Logged every 100 requests per endpoint
   - Includes min/max times and error rate

3. **Usage Spike Detection**
   - Detects unusual traffic patterns
   - Threshold: 100+ requests in 1 minute
   - Alerts on potential DDoS or traffic spikes

### Log Format Example

```
[2025-10-28 14:13:30] info: [PERFORMANCE METRIC] Metric: slow_endpoint | Value: 1523.45 | Context: {"endpoint":"GET /api/users","threshold_ms":1000,"average_ms":"245.67"}

[2025-10-28 14:15:00] info: [PERFORMANCE METRIC] Metric: endpoint_average_latency | Value: 245.67 | Context: {"endpoint":"GET /api/users","total_requests":100,"min_ms":12.34,"max_ms":1523.45,"error_rate":"2.00%"}

[2025-10-28 14:16:00] info: [PERFORMANCE METRIC] Metric: request_spike | Value: 150 | Context: {"endpoint":"GET /api/users","window_ms":60000}
```

### Manual Performance Logging

```typescript
import logger from '@/lib/docs/logger';

// Log custom performance metrics
logger.logPerformanceMetric('database_query_time', 234.56, {
  query: 'SELECT * FROM users',
  rows_returned: 1000,
});

// Track operation time
const result = await logger.trackOperationTime(
  prisma.user.findMany(),
  'Database query: findMany users'
);
```

## Business Action Logging

### Features
Log business-critical actions for audit purposes:
- Action description
- User ID
- Additional context/details

### Usage

```typescript
import logger from '@/lib/docs/logger';

// Log business action
logger.logBusinessAction('user_created', 'user123', {
  email: 'user@example.com',
  role: 'customer',
});

logger.logBusinessAction('order_placed', 'user456', {
  orderId: 'order789',
  total: 99.99,
  items: 3,
});
```

### Log Format Example

```
[2025-10-28 14:13:30] info: [BUSINESS ACTION] Action: user_created | User ID: user123 | Details: {"email":"user@example.com","role":"customer"}
```

## Logger API Reference

### Core Methods

#### `logger.routeStart(req)`
Logs the start of an HTTP request. Returns a correlation ID.

#### `logger.routeEnd(req, res, id, durationInMs)`
Logs the end of an HTTP request with timing information.

#### `logger.logWithErrorHandling(msg, error, hasSecret?, level?, context?)`
Logs errors with full context and stack traces.
- `msg`: Error message
- `error`: Error object or details
- `hasSecret`: If true, only logs in development
- `level`: Log level (default: 'error')
- `context`: Additional context object

#### `logger.logSecurityEvent(eventType, details)`
Logs security-related events. Automatically sanitizes sensitive data.

#### `logger.logBusinessAction(action, userId?, details?)`
Logs business actions for audit purposes.

#### `logger.logPerformanceMetric(metric, value, context?)`
Logs performance metrics with optional context.

#### `logger.trackOperationTime(operation, operationName)`
Wraps an async operation and logs its execution time.

```typescript
const result = await logger.trackOperationTime(
  myAsyncOperation(),
  'Operation description'
);
```

## Log Levels

The application uses custom log levels:
- `fatal` (0): Critical errors that require immediate attention
- `crit` (1): Critical errors
- `error` (2): Error conditions
- `warn` (3): Warning messages (including security events)
- `info` (4): Informational messages (HTTP requests, business actions)
- `debug` (5): Debug-level messages
- `trace` (6): Trace-level messages

## Log Rotation

Logs are automatically rotated using `winston-daily-rotate-file`:
- Daily rotation by default (configurable via `STORAGE_DATE_PATTERNS`)
- Old logs are compressed (.gz)
- Logs are retained for 90 days (configurable via `KEEP_LOGS_FOR`)
- Logs are stored in the directory specified by `LOG_DIRECTORY`

## Best Practices

1. **Sensitive Data**: Never log passwords, tokens, or sensitive user data. The logger automatically sanitizes some fields, but always be cautious.

2. **Correlation IDs**: Use the correlation ID to trace requests across services in a microservices architecture.

3. **Performance**: Avoid logging large objects or arrays in production. Use structured logging with specific fields.

4. **Security**: Monitor security event logs regularly for suspicious patterns.

5. **Error Context**: Always include relevant context when logging errors to aid debugging.

6. **Business Actions**: Log all critical business operations for audit compliance.

## Monitoring Integration

The logging system can be integrated with monitoring tools:
- Logs are written in a structured format suitable for parsing
- Each log entry includes timestamps and correlation IDs
- Performance metrics can be exported to monitoring dashboards
- Security events can trigger alerts in SIEM systems

## Example: Complete Request Flow

```
[2025-10-28 14:13:29] info: [HTTP Request Start] POST /api/users | Request ID: abc123 | Client IP: 192.168.1.1 | User-Agent: curl/7.64.1 | Auth: Bearer *** | Content-Length: 234bytes

[2025-10-28 14:13:29] info: [BUSINESS ACTION] Action: user_created | User ID: user789 | Details: {"email":"new@example.com"}

[2025-10-28 14:13:30] info: Database query: findMany users took 45.23ms, called from createUser in /src/services/user.service.ts

[2025-10-28 14:13:30] info: [HTTP Request End] POST /api/users | Request ID: abc123 | Status: 201 | Duration: 234.56ms | Client IP: 192.168.1.1 | Response Size: 156bytes
```

## Troubleshooting

### Logs not appearing
1. Check `LOG_TO_FILE` and `LOG_TO_CONSOLE` settings
2. Verify `LOG_LEVEL` is appropriate
3. Ensure `LOG_DIRECTORY` exists and has write permissions

### Performance impact
1. Reduce `LOG_LEVEL` in production (use 'info' or 'warn')
2. Disable console logging in production
3. Ensure log rotation is working properly

### Large log files
1. Adjust `KEEP_LOGS_FOR` to retain fewer days
2. Check that rotation is enabled
3. Monitor disk space regularly
