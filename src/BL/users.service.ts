import prisma from '@/DAL/prismaClient';
import bcrypt from 'bcrypt';
import {
  type CreateUserSchemaType,
  type UpdateUserSchemaType,
  type ListUsersQueryType,
} from '../DTO/users.schema';

// Password hashing configuration
const SALT_ROUNDS = 10;

// Hash password with salt
async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hash = await bcrypt.hash(password, salt);
  return { hash, salt };
}

// Verify password
async function verifyPassword(password: string, hash: string, salt: string) {
  const newHash = await bcrypt.hash(password, salt);
  return newHash === hash;
}

// Create a new user
export async function createUser(input: CreateUserSchemaType) {
  const { password, ...userData } = input;
  
  // Hash the password
  const { hash: hashedPassword, salt } = await hashPassword(password);

  const user = await prisma.users.create({
    data: {
      ...userData,
      password: hashedPassword,
      salt,
    },
    include: {
      promotion: {
        select: {
          id: true,
          title: true,
        },
      },
      globalRole: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  // Remove sensitive data before returning
  const { password: _, salt: __, ...safeUser } = user;
  return safeUser;
}

// Get user by ID
export async function getUserById(id: number) {
  const user = await prisma.users.findUnique({
    where: { id },
    include: {
      promotion: {
        select: {
          id: true,
          title: true,
        },
      },
      globalRole: {
        select: {
          id: true,
          name: true,
        },
      },
      teamMemberships: {
        include: {
          team: {
            include: {
              project: {
                select: {
                  id: true,
                  timePeriod: true,
                },
              },
            },
          },
          projectRole: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  // Remove sensitive data
  const { password, salt, ...safeUser } = user;
  return safeUser;
}

// List users with pagination and search
export async function getUsers(query: ListUsersQueryType) {
  const { page = 1, limit = 10, search, promotionId, globalRoleId } = query;
  const skip = (page - 1) * limit;

  // Build where clause for search
  const where: any = {};

  if (search) {
    where.OR = [
      {
        name: {
          contains: search,
          mode: 'insensitive' as const,
        },
      },
      {
        email: {
          contains: search,
          mode: 'insensitive' as const,
        },
      },
    ];
  }

  if (promotionId) {
    where.promotionId = promotionId;
  }

  if (globalRoleId) {
    where.globalRoleId = globalRoleId;
  }

  // Get total count for pagination
  const total = await prisma.users.count({ where });

  // Get paginated users
  const users = await prisma.users.findMany({
    where,
    skip,
    take: limit,
    include: {
      promotion: {
        select: {
          id: true,
          title: true,
        },
      },
      globalRole: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Remove sensitive data
  const safeUsers = users.map(({ password, salt, ...user }) => user);

  return {
    users: safeUsers,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}

// Update a user
export async function updateUser(id: number, input: UpdateUserSchemaType) {
  const { password, ...userData } = input;
  const updateData: any = { ...userData };

  // If password is being updated, hash it
  if (password) {
    const { hash, salt } = await hashPassword(password);
    updateData.password = hash;
    updateData.salt = salt;
  }

  const user = await prisma.users.update({
    where: { id },
    data: updateData,
    include: {
      promotion: {
        select: {
          id: true,
          title: true,
        },
      },
      globalRole: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  // Remove sensitive data
  const { password: _, salt: __, ...safeUser } = user;
  return safeUser;
}

// Delete a user
export async function deleteUser(id: number) {
  // Check if user exists
  const user = await prisma.users.findUnique({
    where: { id },
  });

  if (!user) {
    throw new Error('User not found');
  }

  // Delete user
  await prisma.users.delete({
    where: { id },
  });

  return { message: 'User deleted successfully' };
}

// Get user statistics
export async function getUserStats() {
  const totalUsers = await prisma.users.count();
  const usersByPromotion = await prisma.users.groupBy({
    by: ['promotionId'],
    _count: {
      _all: true,
    },
    where: {
      promotionId: {
        not: null,
      },
    },
  });

  const usersByRole = await prisma.users.groupBy({
    by: ['globalRoleId'],
    _count: {
      _all: true,
    },
    where: {
      globalRoleId: {
        not: null,
      },
    },
  });

  return {
    totalUsers,
    usersByPromotion,
    usersByRole,
  };
}