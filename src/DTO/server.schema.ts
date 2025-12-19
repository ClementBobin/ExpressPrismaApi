// Importing the Zod library for schema validation
import { z } from 'zod';

// Importing a function to extend Zod with OpenAPI capabilities
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

// Extending Zod with OpenAPI capabilities
extendZodWithOpenApi(z);

// Function to create a generic response schema dynamically
export const createResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
    z.object({
      // Result is a nullable field of the provided schema type
      result: schema.nullable(),
      // Results is an array of the provided schema type, nullable
      results: z.array(schema).nullable(),
      // Duration of the response generation, optional field
      generationTime_ms: z.number().optional().openapi({ description: 'Duration of the response generation', example: 123.456 }),
      // Success status, optional field
      success: z.boolean().optional().openapi({ description: 'Success status', example: true }),
      // Message, nullable and optional field
      message: z.string().nullable().optional().openapi({ description: 'Message', example: 'Success' })
    }).openapi('Response', { description: 'Generic API response' });

// Defining a schema for ResponseError using Zod
export const ResponseError = z.object({
    // Duration of the response generation
    generationTime_ms: z.string().openapi({ description: 'Duration of the response generation', example: '123456ms' }),
    // Success status
    success: z.boolean().openapi({ description: 'Success status', example: false }),
    // Message, nullable field
    message: z.string().nullable().openapi({ description: 'Message', example: 'Error' }),
    // Error details
    error: z.any().openapi({ description: 'Error details' }),
}).openapi('ResponseError', { description: 'Error details' });


// Defining a schema for HealthCheck using Zod
export const HealthCheck = z.object({
    // Status of the service
    status: z.string().openapi({ description: 'Status of the service', example: 'OK' }),
    // Uptime in seconds
    uptime: z.string().openapi({ description: 'Uptime in seconds', example: '123456 seconds' }),
    // Message indicating server status
    message: z.string().openapi({ description: 'Message indicating server status', example: 'Server is running' }),
    // Timestamp of the health check
    timestamp: z.string().datetime().openapi({ description: 'Timestamp of the health check', example: '2021-09-01T12:00:00.000Z' }),
    // API version
    version: z.string().openapi({ description: 'Api version', example: '14.17.0' }),
    // Environment in which the server is running
    environment: z.string().openapi({ description: 'Environment in which the server is running', example: 'production' }),
    // Unix timestamp
    unix: z.number().openapi({ description: 'Unix timestamp', example: 1630512000000 })
}).openapi('HealthCheck', { description: 'Health check details' });

// Base Pagination Query Schema
export const PaginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1).openapi({
    description: 'Page number (starting from 1)',
    example: 1,
  }),
  limit: z.coerce.number().int().positive().min(1).max(100).default(10).openapi({
    description: 'Number of items per page (max 100)',
    example: 10,
  }),
  sortBy: z.string().optional().openapi({
    description: 'Field to sort by',
    example: 'createdAt',
  }),
  sortOrder: z.enum(['asc', 'desc']).default('desc').openapi({
    description: 'Sort order',
    example: 'desc',
  }),
}).openapi('PaginationQuery', {
  description: 'Pagination query parameters',
});

// Pagination Meta Schema
export const PaginationMetaSchema = z.object({
  page: z.number().int().positive().openapi({
    description: 'Current page number',
    example: 1,
  }),
  limit: z.number().int().positive().openapi({
    description: 'Items per page',
    example: 10,
  }),
  total: z.number().int().nonnegative().openapi({
    description: 'Total number of items',
    example: 150,
  }),
  totalPages: z.number().int().nonnegative().openapi({
    description: 'Total number of pages',
    example: 15,
  }),
  hasNextPage: z.boolean().openapi({
    description: 'Whether there is a next page',
    example: true,
  }),
  hasPrevPage: z.boolean().openapi({
    description: 'Whether there is a previous page',
    example: false,
  }),
}).openapi('PaginationMeta', {
  description: 'Pagination metadata',
});

// Generic Paginated Response Schema
export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    data: dataSchema.openapi({
      description: 'Array of items',
    }),
    pagination: PaginationMetaSchema.openapi({
      description: 'Pagination information',
    }),
  }).openapi(`PaginatedResponse<${dataSchema._def.typeName}>`, {
    description: 'Paginated response',
  });

// TypeScript type for HealthCheck schema
export type HealthCheckType = z.infer<typeof HealthCheck>;

// TypeScript type for ResponseError schema
export type ResponseErrorType = z.infer<typeof ResponseError>;

// Pagination Query Schemas
export type PaginationQueryType = z.infer<typeof PaginationQuerySchema>;
export type PaginationMetaType = z.infer<typeof PaginationMetaSchema>;

// Creating a response schema that includes the HealthCheck schema
export const ResponseWithHealthCheck = createResponseSchema(HealthCheck);