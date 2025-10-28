import type { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

const packageJsonPath = path.resolve('.', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

export const configureCustomHeaders = () => {
  return (_req: Request, res: Response, next: NextFunction) => {
    res.removeHeader('X-Powered-By');
    res.removeHeader('Server');
    res.setHeader('apiName', packageJson.name);
    res.setHeader('apiVersion', packageJson.version);
    next();
  };
};