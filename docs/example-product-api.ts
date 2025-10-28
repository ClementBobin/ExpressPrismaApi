/**
 * Example: Product API with Automatic OpenAPI Registration
 * 
 * This example demonstrates how to create a complete CRUD API for products
 * using the new automatic OpenAPI registration feature.
 */

import express from 'express';
import { z } from 'zod';
import { createZodValidator, validateRequest } from '@/lib/modules/zod-validator-express.config';
import { app } from '@/lib/express';
import type { Request, Response } from 'express';

const router = express.Router();

// ============================================================================
// Schemas
// ============================================================================

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number().positive(),
  description: z.string().optional(),
  category: z.string(),
  inStock: z.boolean()
}).openapi('Product', { description: 'Product entity' });

const CreateProductSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.number().positive('Price must be positive'),
  description: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  inStock: z.boolean().default(true)
}).openapi('CreateProduct', { description: 'Create product request' });

const UpdateProductSchema = z.object({
  name: z.string().min(1).optional(),
  price: z.number().positive().optional(),
  description: z.string().optional(),
  category: z.string().min(1).optional(),
  inStock: z.boolean().optional()
}).openapi('UpdateProduct', { description: 'Update product request' });

const ProductIdSchema = z.object({
  id: z.string().regex(/^\d+$/, 'Product ID must be a number')
});

const ProductQuerySchema = z.object({
  page: z.string().regex(/^\d+$/).optional().default('1'),
  limit: z.string().regex(/^\d+$/).optional().default('10'),
  category: z.string().optional(),
  inStock: z.enum(['true', 'false']).optional()
});

const ErrorResponseSchema = z.object({
  isSuccess: z.boolean().default(false),
  message: z.string(),
  error: z.any().optional()
}).openapi('ErrorResponse', { description: 'Error response' });

const SuccessResponseSchema = z.object({
  isSuccess: z.boolean().default(true),
  message: z.string(),
  data: z.any()
}).openapi('SuccessResponse', { description: 'Success response' });

// ============================================================================
// Validators with Automatic OpenAPI Registration
// ============================================================================

// POST /api/products - Create a new product
const validateCreateProduct = createZodValidator({
  schemas: {
    body: CreateProductSchema
  },
  logger: app.logger,
  openapi: {
    method: 'post',
    path: '/api/products',
    summary: 'Create a new product',
    description: 'Creates a new product in the catalog',
    tags: ['Products'],
    responses: {
      201: {
        description: 'Product created successfully',
        content: {
          'application/json': {
            schema: SuccessResponseSchema
          }
        }
      },
      400: {
        description: 'Invalid request body',
        content: {
          'application/json': {
            schema: ErrorResponseSchema
          }
        }
      },
      500: {
        description: 'Internal server error',
        content: {
          'application/json': {
            schema: ErrorResponseSchema
          }
        }
      }
    }
  }
});

// GET /api/products - List all products with pagination and filters
const validateListProducts = createZodValidator({
  schemas: {
    query: ProductQuerySchema
  },
  logger: app.logger,
  openapi: {
    method: 'get',
    path: '/api/products',
    summary: 'List all products',
    description: 'Retrieves a paginated list of products with optional filters',
    tags: ['Products'],
    responses: {
      200: {
        description: 'List of products',
        content: {
          'application/json': {
            schema: z.object({
              isSuccess: z.boolean(),
              message: z.string(),
              data: z.object({
                products: z.array(ProductSchema),
                pagination: z.object({
                  page: z.number(),
                  limit: z.number(),
                  total: z.number(),
                  totalPages: z.number()
                })
              })
            })
          }
        }
      },
      400: {
        description: 'Invalid query parameters',
        content: {
          'application/json': {
            schema: ErrorResponseSchema
          }
        }
      }
    }
  }
});

// GET /api/products/:id - Get a product by ID
const validateGetProduct = createZodValidator({
  schemas: {
    params: ProductIdSchema
  },
  logger: app.logger,
  openapi: {
    method: 'get',
    path: '/api/products/{id}',
    summary: 'Get product by ID',
    description: 'Retrieves a specific product by its ID',
    tags: ['Products'],
    responses: {
      200: {
        description: 'Product found',
        content: {
          'application/json': {
            schema: z.object({
              isSuccess: z.boolean(),
              message: z.string(),
              data: ProductSchema
            })
          }
        }
      },
      404: {
        description: 'Product not found',
        content: {
          'application/json': {
            schema: ErrorResponseSchema
          }
        }
      },
      400: {
        description: 'Invalid product ID',
        content: {
          'application/json': {
            schema: ErrorResponseSchema
          }
        }
      }
    }
  }
});

// PUT /api/products/:id - Update a product
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
    description: 'Updates an existing product by its ID',
    tags: ['Products'],
    responses: {
      200: {
        description: 'Product updated successfully',
        content: {
          'application/json': {
            schema: z.object({
              isSuccess: z.boolean(),
              message: z.string(),
              data: ProductSchema
            })
          }
        }
      },
      404: {
        description: 'Product not found',
        content: {
          'application/json': {
            schema: ErrorResponseSchema
          }
        }
      },
      400: {
        description: 'Invalid request',
        content: {
          'application/json': {
            schema: ErrorResponseSchema
          }
        }
      }
    }
  }
});

// DELETE /api/products/:id - Delete a product
const validateDeleteProduct = validateRequest(
  'params',
  ProductIdSchema,
  app.logger,
  true,
  {
    method: 'delete',
    path: '/api/products/{id}',
    summary: 'Delete a product',
    description: 'Deletes a product by its ID',
    tags: ['Products'],
    responses: {
      200: {
        description: 'Product deleted successfully',
        content: {
          'application/json': {
            schema: SuccessResponseSchema
          }
        }
      },
      404: {
        description: 'Product not found',
        content: {
          'application/json': {
            schema: ErrorResponseSchema
          }
        }
      },
      400: {
        description: 'Invalid product ID',
        content: {
          'application/json': {
            schema: ErrorResponseSchema
          }
        }
      }
    }
  }
);

// ============================================================================
// Controllers (Handlers)
// ============================================================================

const createProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    // Body is already validated by the middleware
    const productData = req.body;
    
    // Simulate creating a product (replace with actual DB logic)
    const newProduct = {
      id: Math.floor(Math.random() * 10000),
      ...productData
    };

    res.status(201).json({
      isSuccess: true,
      message: 'Product created successfully',
      data: newProduct
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: 'Failed to create product',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

const listProductsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    // Query params are already validated by the middleware
    const { page, limit, category, inStock } = req.query;

    // Simulate fetching products (replace with actual DB logic)
    const products = [
      { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
      { id: 2, name: 'Mouse', price: 29.99, category: 'Electronics', inStock: true },
      { id: 3, name: 'Desk', price: 199.99, category: 'Furniture', inStock: false }
    ];

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);

    res.json({
      isSuccess: true,
      message: 'Products retrieved successfully',
      data: {
        products,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total: products.length,
          totalPages: Math.ceil(products.length / limitNum)
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: 'Failed to retrieve products',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

const getProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    // Params are already validated by the middleware
    const productId = parseInt(req.params.id, 10);

    // Simulate fetching a product (replace with actual DB logic)
    const product = { id: productId, name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true };

    if (!product) {
      res.status(404).json({
        isSuccess: false,
        message: 'Product not found'
      });
      return;
    }

    res.json({
      isSuccess: true,
      message: 'Product retrieved successfully',
      data: product
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: 'Failed to retrieve product',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

const updateProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    // Params and body are already validated by the middleware
    const productId = parseInt(req.params.id, 10);
    const updates = req.body;

    // Simulate updating a product (replace with actual DB logic)
    const updatedProduct = {
      id: productId,
      name: 'Updated Laptop',
      price: 899.99,
      category: 'Electronics',
      inStock: true,
      ...updates
    };

    res.json({
      isSuccess: true,
      message: 'Product updated successfully',
      data: updatedProduct
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: 'Failed to update product',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

const deleteProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    // Params are already validated by the middleware
    const productId = parseInt(req.params.id, 10);

    // Simulate deleting a product (replace with actual DB logic)
    res.json({
      isSuccess: true,
      message: `Product ${productId} deleted successfully`,
      data: null
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: 'Failed to delete product',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// ============================================================================
// Routes
// ============================================================================

// Notice: No manual registry.registerPath() calls needed!
// The validators automatically register the paths with OpenAPI registry

router.post('/products', validateCreateProduct, createProductHandler);
router.get('/products', validateListProducts, listProductsHandler);
router.get('/products/:id', validateGetProduct, getProductHandler);
router.put('/products/:id', validateUpdateProduct, updateProductHandler);
router.delete('/products/:id', validateDeleteProduct, deleteProductHandler);

export default router;
