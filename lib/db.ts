import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function connect() {
  try {
    const res = await prisma.$connect();
    console.log("DB connected!");
  } catch (err) {
    console.log("Failed to connect db ...");
    return err;
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
