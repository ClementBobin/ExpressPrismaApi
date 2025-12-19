import type { Request, Response, RequestHandler } from 'express';
import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
  getUserStats,
} from '@/BL/users.service';

// Create user handler
export const createUserHandler: RequestHandler = async (
  request: Request,
  reply: Response
): Promise<void> => {
  try {
    const user = await createUser(request.body);
    reply.status(201).json(user);
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      if (e.message.includes('Unique constraint failed')) {
        reply.status(400).json({ error: 'Email already exists' });
      } else if (e.message.includes('Foreign key constraint failed')) {
        reply.status(400).json({ error: 'Invalid promotion or role ID' });
      } else {
        reply.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      reply.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

// Get user by ID handler
export const getUserByIdHandler: RequestHandler<{ id: string }> = async (
  request: Request<{ id: string }>,
  reply: Response
): Promise<void> => {
  try {
    const id = parseInt(request.params.id, 10);
    const user = await getUserById(id);
    reply.json(user);
  } catch (e) {
    console.error(e);
    if (e instanceof Error && e.message.includes('User not found')) {
      reply.status(404).json({ error: 'User not found' });
    } else {
      reply.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

// List users with search handler
export const getUsersHandler: RequestHandler = async (
  request: Request,
  reply: Response
): Promise<void> => {
  try {
    const query = request.query;
    const parsedQuery = {
      ...query,
      page: query.page ? parseInt(query.page as string, 10) : undefined,
      limit: query.limit ? parseInt(query.limit as string, 10) : undefined,
      globalRoleId: query.globalRoleId ? parseInt(query.globalRoleId as string, 10) : undefined,
    };
    
    const result = await getUsers(parsedQuery);
    reply.json(result);
  } catch (e) {
    console.error(e);
    reply.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update user handler
export const updateUserHandler: RequestHandler<{ id: string }> = async (
  request: Request<{ id: string }>,
  reply: Response
): Promise<void> => {
  try {
    const id = parseInt(request.params.id, 10);
    const user = await updateUser(id, request.body);
    reply.json(user);
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      if (e.message.includes('User not found')) {
        reply.status(404).json({ error: 'User not found' });
      } else if (e.message.includes('Unique constraint failed')) {
        reply.status(400).json({ error: 'Email already exists' });
      } else if (e.message.includes('Foreign key constraint failed')) {
        reply.status(400).json({ error: 'Invalid promotion or role ID' });
      } else {
        reply.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      reply.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

// Delete user handler
export const deleteUserHandler: RequestHandler<{ id: string }> = async (
  request: Request<{ id: string }>,
  reply: Response
): Promise<void> => {
  try {
    const id = parseInt(request.params.id, 10);
    await deleteUser(id);
    reply.status(204).send();
  } catch (e) {
    console.error(e);
    if (e instanceof Error && e.message.includes('User not found')) {
      reply.status(404).json({ error: 'User not found' });
    } else {
      reply.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

// Get user statistics handler
export const getUserStatsHandler: RequestHandler = async (
  request: Request,
  reply: Response
): Promise<void> => {
  try {
    const stats = await getUserStats();
    reply.json(stats);
  } catch (e) {
    console.error(e);
    reply.status(500).json({ error: 'Internal Server Error' });
  }
};