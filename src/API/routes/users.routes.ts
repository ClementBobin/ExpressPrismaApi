import express from 'express';
import {
  createUserHandler,
  getUserByIdHandler,
  getUsersHandler,
  updateUserHandler,
  deleteUserHandler,
} from '../users.controller';
import registry from '@/lib/docs/openAPIRegistry';
import { ResponseError } from '@/DTO/server.schema';
import {
  UserResultServer,
  UsersListResultServer,
  CreateUserSchema,
  UpdateUserSchema,
} from '@/DTO/users.schema';

const router = express.Router();

// Register the path for creating a new user
registry.registerPath({
  method: 'post',
  path: '/api/users',
  summary: 'Create a new user',
  tags: ['Users'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateUserSchema,
        },
      }
    }
  },
  responses: {
    201: {
      description: 'User created successfully',
      content: {
        'application/json': {
          schema: UserResultServer,
        },
      },
    },
    400: {
      description: 'Invalid input or email already exists',
      content: {
        'application/json': {
          schema: ResponseError,
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ResponseError,
        },
      },
    },
  },
});
router.post('/', createUserHandler);

// Register the path for getting all users with search
registry.registerPath({
  method: 'get',
  path: '/api/users',
  summary: 'Get all users with search and pagination',
  tags: ['Users'],
  parameters: [
    {
      name: 'search',
      in: 'query',
      required: false,
      schema: {
        type: 'string',
        description: 'Search term for name or email',
        example: 'john',
      },
    },
    {
      name: 'promotionId',
      in: 'query',
      required: false,
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'Filter by promotion ID',
        example: '770e8400-e29b-41d4-a716-446655440000',
      },
    },
    {
      name: 'globalRoleId',
      in: 'query',
      required: false,
      schema: {
        type: 'integer',
        description: 'Filter by global role ID',
        example: 1,
      },
    },
    {
      name: 'page',
      in: 'query',
      required: false,
      schema: {
        type: 'integer',
        description: 'Page number',
        example: 1,
        default: 1,
      },
    },
    {
      name: 'limit',
      in: 'query',
      required: false,
      schema: {
        type: 'integer',
        description: 'Number of items per page',
        example: 10,
        default: 10,
      },
    },
  ],
  responses: {
    200: {
      description: 'Users retrieved successfully',
      content: {
        'application/json': {
          schema: UsersListResultServer,
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ResponseError,
        },
      },
    },
  },
});
router.get('/', getUsersHandler);

// Register the path for getting user by ID
registry.registerPath({
  method: 'get',
  path: '/api/users/{id}',
  summary: 'Get user by ID',
  tags: ['Users'],
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      schema: {
        type: 'integer',
        description: 'User ID',
        example: 1,
      },
    },
  ],
  responses: {
    200: {
      description: 'User retrieved successfully',
      content: {
        'application/json': {
          schema: UserResultServer,
        },
      },
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: ResponseError,
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ResponseError,
        },
      },
    },
  },
});
router.get('/:id', getUserByIdHandler);

// Register the path for updating a user
registry.registerPath({
  method: 'put',
  path: '/api/users/{id}',
  summary: 'Update a user',
  tags: ['Users'],
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      schema: {
        type: 'integer',
        description: 'User ID',
        example: 1,
      },
    },
  ],
  request: {
    body: {
      content: {
        'application/json': {
          schema: UpdateUserSchema,
        },
      }
    }
  },
  responses: {
    200: {
      description: 'User updated successfully',
      content: {
        'application/json': {
          schema: UserResultServer,
        },
      },
    },
    400: {
      description: 'Invalid input or email already exists',
      content: {
        'application/json': {
          schema: ResponseError,
        },
      },
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: ResponseError,
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ResponseError,
        },
      },
    },
  },
});
router.put('/:id', updateUserHandler);

// Register the path for deleting a user
registry.registerPath({
  method: 'delete',
  path: '/api/users/{id}',
  summary: 'Delete a user',
  tags: ['Users'],
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      schema: {
        type: 'integer',
        description: 'User ID',
        example: 1,
      },
    },
  ],
  responses: {
    204: {
      description: 'User deleted successfully',
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: ResponseError,
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ResponseError,
        },
      },
    },
  },
});
router.delete('/:id', deleteUserHandler);

export default router;