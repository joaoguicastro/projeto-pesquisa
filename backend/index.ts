import { PrismaClient } from './generated/client';

const prisma = new PrismaClient();

async function getAllUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
}

getAllUsers();
