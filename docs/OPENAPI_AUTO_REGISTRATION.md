# OpenAPI Automatic Registration with Zod Validator

This document demonstrates how to use the automatic OpenAPI registration feature with the Zod validator middleware.

## Overview

The `zod-validator-express.config.ts` module now supports automatic OpenAPI path registration. When you provide OpenAPI metadata to the validator, it will automatically register the route with the OpenAPI registry, eliminating the need for manual `registry.registerPath()` calls.

## Features

- **Automatic Registration**: Routes are automatically registered with the OpenAPI registry when OpenAPI metadata is provided
- **Schema Integration**: Request schemas (body, params, query, headers) are automatically included in the OpenAPI documentation
- **Multiple Response Types**: Supports different response types (200, 400, 500, etc.)
- **Backward Compatible**: Works alongside existing manual registration approach
- **Type Safe**: Full TypeScript support with proper typing

## Usage Examples

### Example 1: Basic POST Request with Body Validation

```typescript
import { createZodValidator } from '@/lib/modules/zod-validator-express.config';
import { app } from '@/lib/express';
import { z } from 'zod';

// Define your schema
const CreateProductSchema = z.object({
  name: z.string(),
  price: z.number().positive(),
  description: z.string().optional()
});

// Create validator with automatic OpenAPI registration
const validateCreateProduct = createZodValidator({
  schemas: {
    body: CreateProductSchema
  },
  logger: app.logger,
  openapi: {
    method: 'post',
    path: '/api/products',
    summary: 'Create a new product',
    description: 'Creates a new product in the system',
    tags: ['Products'],
    responses: {
      201: {
        description: 'Product created successfully',
        content: {
          'application/json': {
            schema: z.object({
              id: z.number(),
              name: z.string(),
              price: z.number()
            })
          }
        }
      },
      400: {
        description: 'Invalid input',
        content: {
          'application/json': {
            schema: z.object({
              error: z.string()
            })
          }
        }
      }
    }
  }
});

// Use in route
router.post('/products', validateCreateProduct, createProductHandler);
```

### Example 2: GET Request with Path Parameters

```typescript
import { validateRequest } from '@/lib/modules/zod-validator-express.config';
import { app } from '@/lib/express';
import { z } from 'zod';

// Define params schema
const ProductIdSchema = z.object({
  id: z.string().regex(/^\d+$/)
});

// Create validator with OpenAPI registration
const validateProductId = validateRequest(
  'params',
  ProductIdSchema,
  app.logger,
  true,
  {
    method: 'get',
    path: '/api/products/{id}',
    summary: 'Get product by ID',
    tags: ['Products'],
    responses: {
      200: {
        description: 'Product found',
        content: {
          'application/json': {
            schema: z.object({
              id: z.number(),
              name: z.string(),
              price: z.number()
            })
          }
        }
      },
      404: {
        description: 'Product not found',
        content: {
          'application/json': {
            schema: z.object({
              error: z.string()
            })
          }
        }
      }
    }
  }
);

// Use in route
router.get('/products/:id', validateProductId, getProductHandler);
```

### Example 3: GET Request with Query Parameters

```typescript
import { createZodValidator } from '@/lib/modules/zod-validator-express.config';
import { app } from '@/lib/express';
import { z } from 'zod';

// Define query schema
const ProductQuerySchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
  category: z.string().optional()
});

// Create validator with OpenAPI registration
const validateProductQuery = createZodValidator({
  schemas: {
    query: ProductQuerySchema
  },
  logger: app.logger,
  openapi: {
    method: 'get',
    path: '/api/products',
    summary: 'List all products',
    tags: ['Products'],
    responses: {
      200: {
        description: 'List of products',
        content: {
          'application/json': {
            schema: z.object({
              products: z.array(z.object({
                id: z.number(),
                name: z.string(),
                price: z.number()
              })),
              total: z.number()
            })
          }
        }
      }
    }
  }
});

// Use in route
router.get('/products', validateProductQuery, listProductsHandler);
```

### Example 4: PUT Request with Multiple Schemas

```typescript
import { createZodValidator } from '@/lib/modules/zod-validator-express.config';
import { app } from '@/lib/express';
import { z } from 'zod';

// Define schemas
const ProductIdSchema = z.object({
  id: z.string()
});

const UpdateProductSchema = z.object({
  name: z.string().optional(),
  price: z.number().positive().optional(),
  description: z.string().optional()
});

// Create validator with multiple schemas and OpenAPI registration
const validateUpdateProduct = createZodValidator({
  schemas: {
    params: ProductIdSchema,
    body: UpdateProductSchema
  },
  logger: app.logger,
  openapi: {
    method: 'put',
    path: '/api/products/{id}',
    summary: 'Update a product',
    tags: ['Products'],
    responses: {
      200: {
        description: 'Product updated successfully',
        content: {
          'application/json': {
            schema: z.object({
              id: z.number(),
              name: z.string(),
              price: z.number()
            })
          }
        }
      },
      404: {
        description: 'Product not found'
      },
      400: {
        description: 'Invalid input'
      }
    }
  }
});

// Use in route
router.put('/products/:id', validateUpdateProduct, updateProductHandler);
```

### Example 5: Response Validation

```typescript
import { validateResponse } from '@/lib/modules/zod-validator-express.config';
import { app } from '@/lib/express';
import { z } from 'zod';

// Define response schema
const HealthCheckSchema = z.object({
  status: z.string(),
  uptime: z.string(),
  timestamp: z.string()
});

// Create response validator with OpenAPI registration
const validateHealthResponse = validateResponse(
  HealthCheckSchema,
  app.logger,
  true,
  {
    method: 'get',
    path: '/api/health',
    summary: 'Health check endpoint',
    tags: ['System'],
    responses: {
      200: {
        description: 'System is healthy',
        content: {
          'application/json': {
            schema: HealthCheckSchema
          }
        }
      }
    }
  }
);

// Use in route
router.get('/health', validateHealthResponse, healthCheckHandler);
```

## API Reference

### `createZodValidator(options: ZodValidatorOptions): RequestHandler`

Creates a Zod validation middleware with optional OpenAPI registration.

**Options:**
- `schemas: ValidationSchemas` - Object containing validation schemas for body, params, query, headers, and response
- `logger?: Logger` - Optional Winston logger instance
- `strict?: boolean` - Enable strict mode validation (default: true)
- `openapi?: OpenAPIMetadata` - Optional OpenAPI metadata for automatic registration

**OpenAPIMetadata:**
- `method: 'get' | 'post' | 'put' | 'delete' | 'patch'` - HTTP method
- `path: string` - API path (e.g., '/api/users')
- `summary?: string` - Brief description of the endpoint
- `description?: string` - Detailed description
- `tags?: string[]` - OpenAPI tags for grouping
- `responses?: RouteConfig['responses']` - Response definitions with different status codes

### `validateRequest(target, schema, logger?, strict?, openapi?): RequestHandler`

Helper function to validate a specific request target (body, params, query, or headers).

### `validateResponse(schema, logger?, strict?, openapi?): RequestHandler`

Helper function to validate response data.

## Migration Guide

### Before (Manual Registration)

```typescript
// Old approach - manual registration
registry.registerPath({
  method: 'post',
  path: '/api/users',
  summary: 'Create user',
  tags: ['Users'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateUserSchema
        }
      }
    }
  },
  responses: {
    201: {
      description: 'User created'
    }
  }
});

router.post('/users', validateCreateUser, createUserHandler);
```

### After (Automatic Registration)

```typescript
// New approach - automatic registration
const validateCreateUser = createZodValidator({
  schemas: {
    body: CreateUserSchema
  },
  logger: app.logger,
  openapi: {
    method: 'post',
    path: '/api/users',
    summary: 'Create user',
    tags: ['Users'],
    responses: {
      201: {
        description: 'User created'
      }
    }
  }
});

router.post('/users', validateCreateUser, createUserHandler);
```

## Benefits

1. **Reduced Boilerplate**: No need to manually call `registry.registerPath()` separately
2. **Single Source of Truth**: Validation schemas and OpenAPI documentation are defined together
3. **Less Error-Prone**: Schemas are automatically synchronized between validation and documentation
4. **Cleaner Code**: Routes are more concise and easier to maintain
5. **Type Safety**: Full TypeScript support ensures correct usage

## Notes

- The automatic registration is optional. If you don't provide OpenAPI metadata, the validator works as before
- The feature is fully backward compatible with existing code
- Response schemas in the `openapi.responses` object should be Zod schemas for proper type inference
- All existing tests continue to pass, ensuring no breaking changes

## Testing

The feature includes comprehensive test coverage:
- Automatic registration with body schema
- Automatic registration with params schema
- Automatic registration with query schema
- Multiple schemas registration (body + params + query)
- Different response types handling
- Backward compatibility (no registration without metadata)
- Integration with helper functions (`validateRequest`, `validateResponse`)

See `Test/lib/modules/zod-validator-express.config.test.ts` for detailed test examples.
