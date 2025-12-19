import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { createResponseSchema, PaginatedResponseSchema } from './server.schema';

extendZodWithOpenApi(z);

// Base User Schema
export const UserSchemaDal = z.object({
  id: z.number().int().positive().openapi({ description: 'Unique identifier for the user', example: 1 }),
  email: z.string().email().openapi({ description: 'User email address', example: 'john.doe@example.com' }),
  name: z.string().openapi({ description: 'User full name', example: 'John Doe' }),
  password: z.string().openapi({ description: 'Hashed password' }),
  salt: z.string().openapi({ description: 'Password salt' }),
  promotionId: z.string().uuid().nullable().openapi({ description: 'ID of user\'s promotion', example: '770e8400-e29b-41d4-a716-446655440000' }),
  globalRoleId: z.number().int().positive().nullable().openapi({ description: 'ID of user\'s global role', example: 1 }),
  createdAt: z.date().openapi({ description: 'Timestamp when the user was created', example: '2023-10-01T12:00:00.000Z' }),
  updatedAt: z.date().openapi({ description: 'Timestamp when the user was last updated', example: '2023-10-02T12:00:00.000Z' }),
}).openapi('UserDal', { description: 'Data Access Layer schema for a user' });

// API User Schema (excludes sensitive fields)
export const UserSchema = UserSchemaDal.omit({
  password: true,
  salt: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  promotion: z.object({
    id: z.string().uuid(),
    title: z.string(),
  }).nullable().optional(),
  globalRole: z.object({
    id: z.number().int().positive(),
    name: z.string(),
  }).nullable().optional(),
}).openapi('User', { description: 'API schema for a user' });

// Create User Schema
export const CreateUserSchema = z.object({
  email: z.string().email().openapi({ description: 'User email address', example: 'john.doe@example.com' }),
  name: z.string().min(2).openapi({ description: 'User full name', example: 'John Doe' }),
  password: z.string().min(6).openapi({ description: 'Password (min 6 characters)', example: 'password123' }),
  promotionId: z.string().uuid().optional().openapi({ description: 'ID of user\'s promotion', example: '770e8400-e29b-41d4-a716-446655440000' }),
  globalRoleId: z.number().int().positive().optional().openapi({ description: 'ID of user\'s global role', example: 1 }),
}).openapi('CreateUser', { description: 'Schema for creating a new user' });

// Update User Schema
export const UpdateUserSchema = CreateUserSchema.omit({ password: true }).partial()
  .extend({
    password: z.string().min(6).optional().openapi({ description: 'New password (min 6 characters)', example: 'newpassword123' }),
  }).openapi('UpdateUser', { description: 'Schema for updating an existing user' });

// User ID Schema
export const UserIdSchema = z.object({
  id: z.string().transform((val) => parseInt(val, 10)).pipe(z.number().int().positive())
    .openapi({ description: 'User ID', example: 1 }),
}).openapi('UserId', { description: 'Schema for user ID validation' });

// Search Users Query Schema
export const SearchUsersQuerySchema = z.object({
  search: z.string().optional().openapi({ description: 'Search term for name or email', example: 'john' }),
  promotionId: z.string().uuid().optional().openapi({ description: 'Filter by promotion ID', example: '770e8400-e29b-41d4-a716-446655440000' }),
  globalRoleId: z.string().transform((val) => parseInt(val, 10)).pipe(z.number().int().positive()).optional()
    .openapi({ description: 'Filter by global role ID', example: '1' }),
}).openapi('SearchUsersQuery', { description: 'Schema for searching users' });

// Types
export type UserSchemaType = z.infer<typeof UserSchema>;
export type UserSchemaDalType = z.infer<typeof UserSchemaDal>;
export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;
export type UpdateUserSchemaType = z.infer<typeof UpdateUserSchema>;
export type SearchUsersQueryType = z.infer<typeof SearchUsersQuerySchema>;
export type ListUsersQueryType = z.infer<typeof ListUsersQuerySchema>;

// Response Schemas
export const UserResultServer = createResponseSchema(UserSchema);
export const UsersListResultServer = createResponseSchema(z.array(UserSchema));