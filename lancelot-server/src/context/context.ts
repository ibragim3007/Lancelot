import { PrismaClient } from '@prisma/client';
import db from '../../database/MockDatabase';

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  db: typeof db;
}

export const context: Context = {
  prisma: prisma,
  db: db,
};
