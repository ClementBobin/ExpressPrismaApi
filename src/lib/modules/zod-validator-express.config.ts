import type { Request, Response, NextFunction, RequestHandler } from 'express';
import type { Logger } from 'winston';
import { type ZodTypeAny, ZodError, type AnyZodObject, type ZodEffects } from 'zod';
import type { RouteConfig } from '@asteasolutions/zod-to-openapi';
import registry from '@/lib/docs/openAPIRegistry';

export type ValidationTarget = 'body' | 'params' | 'query' | 'headers';

export interface ValidationSchemas {
  body?: ZodTypeAny;
  params?: ZodTypeAny;
  query?: ZodTypeAny;
  headers?: ZodTypeAny;
  response?: ZodTypeAny;
}

export interface OpenAPIMetadata {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  path: string;
  summary?: string;
  description?: string;
  tags?: string[];
  responses?: RouteConfig['responses'];
}

export interface ZodValidatorOptions {
  schemas: ValidationSchemas;
  logger?: Logger;
  strict?: boolean;
  openapi?: OpenAPIMetadata;
}

/**
 * Creates a Zod validation middleware for Express
 * Automatically validates request body, params, query, and headers
 * Also validates response data if a response schema is provided
 * Optionally registers the route with OpenAPI registry
 */
export const createZodValidator = (options: ZodValidatorOptions): RequestHandler => {
  const { schemas, logger, strict = true, openapi } = options;

  // Automatically register the path in OpenAPI registry if metadata is provided
  if (openapi) {
    const routeConfig: RouteConfig = {
      method: openapi.method,
      path: openapi.path,
      summary: openapi.summary,
      description: openapi.description,
      tags: openapi.tags,
      responses: openapi.responses || {}
    };

    // Add request schemas if provided
    const request: RouteConfig['request'] = {};

    // Add request body schema if provided
    if (schemas.body) {
      request.body = {
        content: {
          'application/json': {
            schema: schemas.body
          }
        }
      };
    }

    // Add params schema if it's a ZodObject
    if (schemas.params) {
      request.params = schemas.params as AnyZodObject | ZodEffects<any, any, any>;
    }

    // Add query schema if it's a ZodObject
    if (schemas.query) {
      request.query = schemas.query as AnyZodObject | ZodEffects<any, any, any>;
    }

    // Add headers schema if it's a ZodObject
    if (schemas.headers) {
      request.headers = schemas.headers as AnyZodObject | ZodEffects<any, any, any>;
    }

    // Only add request if it has content
    if (Object.keys(request).length > 0) {
      routeConfig.request = request;
    }

    // Register the path with OpenAPI registry
    registry.registerPath(routeConfig);
  }

  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Validate request body
      if (schemas.body) {
        const schema = strict && 'strict' in schemas.body ? (schemas.body.strict as any)() : schemas.body;
        const result = schema.safeParse(req.body);
        if (!result.success) {
          logger?.logWithErrorHandling?.('Invalid request body:', result.error, false, 'warn');
          res.status(400).json({
            isSuccess: false,
            message: 'Invalid request body',
            error: formatZodError(result.error)
          });
          return;
        }
        req.body = result.data;
      }

      // Validate request params
      if (schemas.params) {
        const schema = strict && 'strict' in schemas.params ? (schemas.params.strict as any)() : schemas.params;
        const result = schema.safeParse(req.params);
        if (!result.success) {
          logger?.logWithErrorHandling?.('Invalid request params:', result.error, false, 'warn');
          res.status(400).json({
            isSuccess: false,
            message: 'Invalid request params',
            error: formatZodError(result.error)
          });
          return;
        }
        req.params = result.data;
      }

      // Validate request query
      if (schemas.query) {
        const schema = strict && 'strict' in schemas.query ? (schemas.query.strict as any)() : schemas.query;
        const result = schema.safeParse(req.query);
        if (!result.success) {
          logger?.logWithErrorHandling?.('Invalid request query:', result.error, false, 'warn');
          res.status(400).json({
            isSuccess: false,
            message: 'Invalid request query',
            error: formatZodError(result.error)
          });
          return;
        }
        req.query = result.data;
      }

      // Validate request headers
      if (schemas.headers) {
        const schema = strict && 'strict' in schemas.headers ? (schemas.headers.strict as any)() : schemas.headers;
        const result = schema.safeParse(req.headers);
        if (!result.success) {
          logger?.logWithErrorHandling?.('Invalid request headers:', result.error, false, 'warn');
          res.status(400).json({
            isSuccess: false,
            message: 'Invalid request headers',
            error: formatZodError(result.error)
          });
          return;
        }
      }

      // If response validation is required, intercept res.json
      if (schemas.response) {
        const originalJson = res.json.bind(res);
        res.json = function (this: Response, payload: any): Response {
          const schema = strict && schemas.response && 'strict' in schemas.response ? (schemas.response.strict as any)() : schemas.response;
          const result = schema!.safeParse(payload);
          
          if (!result.success) {
            logger?.logWithErrorHandling?.('Invalid response data:', result.error, false, 'warn');
            return originalJson({
              isSuccess: false,
              message: 'Internal server error',
              error: 'Response validation failed'
            });
          }
          
          return originalJson(result.data);
        };
      }

      next();
    } catch (error) {
      logger?.logWithErrorHandling?.('Validation middleware error:', error);
      res.status(500).json({
        isSuccess: false,
        message: 'Internal server error',
        error: 'Validation failed'
      });
    }
  };
};

/**
 * Format Zod errors into a more readable structure
 */
function formatZodError(error: ZodError): any {
  return {
    issues: error.issues.map(issue => ({
      path: issue.path.join('.'),
      message: issue.message,
      code: issue.code
    }))
  };
}

/**
 * Helper function to create a validator for a single validation target
 */
export const validateRequest = (
  target: ValidationTarget,
  schema: ZodTypeAny,
  logger?: Logger,
  strict = true,
  openapi?: OpenAPIMetadata
): RequestHandler => {
  return createZodValidator({
    schemas: { [target]: schema },
    logger,
    strict,
    openapi
  });
};

/**
 * Helper function to create a response validator
 */
export const validateResponse = (
  schema: ZodTypeAny,
  logger?: Logger,
  strict = true,
  openapi?: OpenAPIMetadata
): RequestHandler => {
  return createZodValidator({
    schemas: { response: schema },
    logger,
    strict,
    openapi
  });
};
