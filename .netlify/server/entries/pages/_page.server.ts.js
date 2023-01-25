import { PrismaClient } from "@prisma/client";
const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}
const load = async () => {
  return {
    produtos: await prisma.produto.findMany()
  };
};
export {
  load
};
