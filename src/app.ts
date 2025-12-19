import { app } from '@/lib/express';

// Importing routes
import serverRoutes from '@/API/routes/server.routes';

import userRoutes from '@/API/routes/users.routes';

// API routes
app.use('/api', serverRoutes);

// Mount the API routes
app.use('/api/users', userRoutes);