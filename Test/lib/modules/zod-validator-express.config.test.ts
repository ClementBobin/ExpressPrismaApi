import { z } from 'zod';
import { createZodValidator, validateRequest, validateResponse } from '@/lib/modules/zod-validator-express.config';
import { mockRequest, mockResponse, mockNext, mockLogger } from '../../../__mocks__/test-utils';
import registry from '@/lib/docs/openAPIRegistry';

// Mock the registry
jest.mock('@/lib/docs/openAPIRegistry', () => ({
  __esModule: true,
  default: {
    registerPath: jest.fn()
  }
}));

describe('Zod Validator Middleware', () => {
  let req: ReturnType<typeof mockRequest>;
  let res: ReturnType<typeof mockResponse>;
  let next: ReturnType<typeof mockNext>;
  let logger: ReturnType<typeof mockLogger>;

  beforeEach(() => {
    jest.clearAllMocks();
    req = mockRequest();
    res = mockResponse();
    next = mockNext();
    logger = mockLogger();
  });

  describe('createZodValidator - body validation', () => {
    it('should pass validation with valid body data', async () => {
      const schema = z.object({
        name: z.string(),
        age: z.number()
      });

      req.body = { name: 'John', age: 30 };
      
      const middleware = createZodValidator({
        schemas: { body: schema },
        logger
      });

      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
      expect(req.body).toEqual({ name: 'John', age: 30 });
    });

    it('should fail validation with invalid body data', async () => {
      const schema = z.object({
        name: z.string(),
        age: z.number()
      });

      req.body = { name: 'John', age: 'not a number' };
      
      const middleware = createZodValidator({
        schemas: { body: schema },
        logger
      });

      await middleware(req, res, next);

      expect(next).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        isSuccess: false,
        message: 'Invalid request body',
        error: expect.objectContaining({
          issues: expect.any(Array)
        })
      });
    });

    it('should reject extra fields when strict mode is enabled', async () => {
      const schema = z.object({
        name: z.string()
      });

      req.body = { name: 'John', extraField: 'not allowed' };
      
      const middleware = createZodValidator({
        schemas: { body: schema },
        logger,
        strict: true
      });

      await middleware(req, res, next);

      expect(next).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
    });

    it('should allow extra fields when strict mode is disabled', async () => {
      const schema = z.object({
        name: z.string()
      });

      req.body = { name: 'John', extraField: 'allowed' };
      
      const middleware = createZodValidator({
        schemas: { body: schema },
        logger,
        strict: false
      });

      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });
  });

  describe('createZodValidator - params validation', () => {
    it('should pass validation with valid params', async () => {
      const schema = z.object({
        id: z.string()
      });

      req.params = { id: '123' };
      
      const middleware = createZodValidator({
        schemas: { params: schema },
        logger
      });

      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('should fail validation with invalid params', async () => {
      const schema = z.object({
        id: z.string().uuid()
      });

      req.params = { id: 'not-a-uuid' };
      
      const middleware = createZodValidator({
        schemas: { params: schema },
        logger
      });

      await middleware(req, res, next);

      expect(next).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        isSuccess: false,
        message: 'Invalid request params',
        error: expect.objectContaining({
          issues: expect.any(Array)
        })
      });
    });
  });

  describe('createZodValidator - query validation', () => {
    it('should pass validation with valid query params', async () => {
      const schema = z.object({
        page: z.string(),
        limit: z.string()
      });

      req.query = { page: '1', limit: '10' };
      
      const middleware = createZodValidator({
        schemas: { query: schema },
        logger
      });

      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('should fail validation with invalid query params', async () => {
      const schema = z.object({
        page: z.string().min(1)
      });

      req.query = { page: '' };
      
      const middleware = createZodValidator({
        schemas: { query: schema },
        logger
      });

      await middleware(req, res, next);

      expect(next).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        isSuccess: false,
        message: 'Invalid request query',
        error: expect.objectContaining({
          issues: expect.any(Array)
        })
      });
    });
  });

  describe('createZodValidator - headers validation', () => {
    it('should pass validation with valid headers', async () => {
      const schema = z.object({
        'content-type': z.string(),
        'authorization': z.string().optional()
      });

      req.headers = { 'content-type': 'application/json' };
      
      const middleware = createZodValidator({
        schemas: { headers: schema },
        logger,
        strict: false
      });

      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('should fail validation with invalid headers', async () => {
      const schema = z.object({
        'authorization': z.string()
      });

      req.headers = {};
      
      const middleware = createZodValidator({
        schemas: { headers: schema },
        logger,
        strict: false
      });

      await middleware(req, res, next);

      expect(next).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        isSuccess: false,
        message: 'Invalid request headers',
        error: expect.objectContaining({
          issues: expect.any(Array)
        })
      });
    });
  });

  describe('createZodValidator - response validation', () => {
    it('should validate response data successfully', async () => {
      const responseSchema = z.object({
        status: z.string(),
        message: z.string()
      });

      const originalJson = res.json;
      const jsonSpy = jest.fn(originalJson);
      res.json = jsonSpy;

      const middleware = createZodValidator({
        schemas: { response: responseSchema },
        logger
      });

      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();

      // Simulate sending a valid response
      const responseData = { status: 'OK', message: 'Success' };
      res.json(responseData);

      expect(jsonSpy).toHaveBeenCalledWith(responseData);
    });

    it('should reject invalid response data', async () => {
      const responseSchema = z.object({
        status: z.string(),
        message: z.string()
      });

      const originalJson = res.json;
      const jsonSpy = jest.fn(originalJson);
      res.json = jsonSpy;

      const middleware = createZodValidator({
        schemas: { response: responseSchema },
        logger
      });

      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();

      // Simulate sending an invalid response
      const responseData = { status: 'OK', message: 123 }; // message should be string
      res.json(responseData);

      expect(jsonSpy).toHaveBeenCalledWith({
        isSuccess: false,
        message: 'Internal server error',
        error: 'Response validation failed'
      });
    });
  });

  describe('createZodValidator - multiple validations', () => {
    it('should validate both body and params together', async () => {
      const bodySchema = z.object({
        name: z.string()
      });
      const paramsSchema = z.object({
        id: z.string()
      });

      req.body = { name: 'John' };
      req.params = { id: '123' };
      
      const middleware = createZodValidator({
        schemas: { body: bodySchema, params: paramsSchema },
        logger
      });

      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('should fail if any validation fails', async () => {
      const bodySchema = z.object({
        name: z.string()
      });
      const paramsSchema = z.object({
        id: z.string()
      });

      req.body = { name: 'John' };
      req.params = {}; // Missing id
      
      const middleware = createZodValidator({
        schemas: { body: bodySchema, params: paramsSchema },
        logger
      });

      await middleware(req, res, next);

      expect(next).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        isSuccess: false,
        message: 'Invalid request params',
        error: expect.objectContaining({
          issues: expect.any(Array)
        })
      });
    });
  });

  describe('validateRequest helper', () => {
    it('should create a validator for body', async () => {
      const schema = z.object({
        email: z.string().email()
      });

      req.body = { email: 'test@example.com' };
      
      const middleware = validateRequest('body', schema, logger);

      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('should create a validator for params', async () => {
      const schema = z.object({
        userId: z.string()
      });

      req.params = { userId: '456' };
      
      const middleware = validateRequest('params', schema, logger);

      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });
  });

  describe('validateResponse helper', () => {
    it('should create a response validator', async () => {
      const schema = z.object({
        data: z.string()
      });

      const originalJson = res.json;
      const jsonSpy = jest.fn(originalJson);
      res.json = jsonSpy;

      const middleware = validateResponse(schema, logger);

      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();

      // Simulate valid response
      res.json({ data: 'test' });
      expect(jsonSpy).toHaveBeenCalledWith({ data: 'test' });
    });
  });

  describe('error handling', () => {
    it('should handle unexpected errors gracefully', async () => {
      const schema = z.object({
        name: z.string()
      });

      // Mock schema.safeParse to throw an error
      jest.spyOn(schema, 'safeParse').mockImplementation(() => {
        throw new Error('Unexpected error');
      });

      req.body = { name: 'John' };
      
      const middleware = createZodValidator({
        schemas: { body: schema },
        logger,
        strict: false
      });

      await middleware(req, res, next);

      expect(next).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        isSuccess: false,
        message: 'Internal server error',
        error: 'Validation failed'
      });
    });
  });

  describe('without logger', () => {
    it('should work without a logger', async () => {
      const schema = z.object({
        name: z.string()
      });

      req.body = { name: 'John' };
      
      const middleware = createZodValidator({
        schemas: { body: schema }
      });

      await middleware(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });
  });

  describe('OpenAPI automatic registration', () => {
    it('should automatically register path with OpenAPI registry when metadata is provided', async () => {
      const bodySchema = z.object({
        name: z.string(),
        email: z.string().email()
      });

      const middleware = createZodValidator({
        schemas: { body: bodySchema },
        logger,
        openapi: {
          method: 'post',
          path: '/api/users',
          summary: 'Create a user',
          tags: ['Users'],
          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: z.object({ id: z.number() })
                }
              }
            }
          }
        }
      });

      expect(registry.registerPath).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'post',
          path: '/api/users',
          summary: 'Create a user',
          tags: ['Users'],
          request: {
            body: {
              content: {
                'application/json': {
                  schema: bodySchema
                }
              }
            }
          },
          responses: expect.any(Object)
        })
      );

      // Middleware should still function normally
      req.body = { name: 'John', email: 'john@example.com' };
      await middleware(req, res, next);
      expect(next).toHaveBeenCalled();
    });

    it('should register path with params schema when provided', async () => {
      const paramsSchema = z.object({
        id: z.string()
      });

      createZodValidator({
        schemas: { params: paramsSchema },
        logger,
        openapi: {
          method: 'get',
          path: '/api/users/{id}',
          summary: 'Get user by ID',
          tags: ['Users'],
          responses: {
            200: {
              description: 'User found'
            }
          }
        }
      });

      expect(registry.registerPath).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'get',
          path: '/api/users/{id}',
          request: expect.objectContaining({
            params: paramsSchema
          })
        })
      );
    });

    it('should register path with query schema when provided', async () => {
      const querySchema = z.object({
        page: z.string(),
        limit: z.string()
      });

      createZodValidator({
        schemas: { query: querySchema },
        logger,
        openapi: {
          method: 'get',
          path: '/api/users',
          summary: 'List users',
          tags: ['Users'],
          responses: {
            200: {
              description: 'Users list'
            }
          }
        }
      });

      expect(registry.registerPath).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'get',
          path: '/api/users',
          request: expect.objectContaining({
            query: querySchema
          })
        })
      );
    });

    it('should register path with multiple schemas (body, params, query)', async () => {
      const bodySchema = z.object({ name: z.string() });
      const paramsSchema = z.object({ id: z.string() });
      const querySchema = z.object({ page: z.string() });

      createZodValidator({
        schemas: {
          body: bodySchema,
          params: paramsSchema,
          query: querySchema
        },
        logger,
        openapi: {
          method: 'put',
          path: '/api/users/{id}',
          summary: 'Update user',
          tags: ['Users'],
          responses: {
            200: {
              description: 'Updated'
            }
          }
        }
      });

      expect(registry.registerPath).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'put',
          path: '/api/users/{id}',
          request: expect.objectContaining({
            body: expect.any(Object),
            params: paramsSchema,
            query: querySchema
          })
        })
      );
    });

    it('should handle different response types in OpenAPI registration', async () => {
      const bodySchema = z.object({ name: z.string() });

      createZodValidator({
        schemas: { body: bodySchema },
        logger,
        openapi: {
          method: 'post',
          path: '/api/items',
          summary: 'Create item',
          responses: {
            200: {
              description: 'Success response',
              content: {
                'application/json': {
                  schema: z.object({ id: z.number(), name: z.string() })
                }
              }
            },
            400: {
              description: 'Bad request',
              content: {
                'application/json': {
                  schema: z.object({ error: z.string() })
                }
              }
            },
            500: {
              description: 'Server error',
              content: {
                'application/json': {
                  schema: z.object({ error: z.string() })
                }
              }
            }
          }
        }
      });

      expect(registry.registerPath).toHaveBeenCalledWith(
        expect.objectContaining({
          responses: expect.objectContaining({
            200: expect.any(Object),
            400: expect.any(Object),
            500: expect.any(Object)
          })
        })
      );
    });

    it('should not register path if openapi metadata is not provided', async () => {
      const bodySchema = z.object({ name: z.string() });

      const middleware = createZodValidator({
        schemas: { body: bodySchema },
        logger
      });

      expect(registry.registerPath).not.toHaveBeenCalled();

      // Middleware should still function normally
      req.body = { name: 'John' };
      await middleware(req, res, next);
      expect(next).toHaveBeenCalled();
    });

    it('should work with validateRequest helper and OpenAPI metadata', async () => {
      const bodySchema = z.object({ email: z.string().email() });

      validateRequest('body', bodySchema, logger, true, {
        method: 'post',
        path: '/api/subscribe',
        summary: 'Subscribe user',
        tags: ['Newsletter'],
        responses: {
          200: {
            description: 'Subscribed'
          }
        }
      });

      expect(registry.registerPath).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'post',
          path: '/api/subscribe',
          summary: 'Subscribe user'
        })
      );
    });

    it('should work with validateResponse helper and OpenAPI metadata', async () => {
      const responseSchema = z.object({ status: z.string() });

      validateResponse(responseSchema, logger, true, {
        method: 'get',
        path: '/api/status',
        summary: 'Get status',
        responses: {
          200: {
            description: 'Status response'
          }
        }
      });

      expect(registry.registerPath).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'get',
          path: '/api/status'
        })
      );
    });
  });
});
