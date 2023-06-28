import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { getUsers } from "~/utils/service";

export const usersRouter = createTRPCRouter({
  getUsers: publicProcedure.query(async () => {
    const user = await getUsers();
    return user;
  }),
  getProduct: publicProcedure.query(async () => {
    const user = await getUsers();
    return user;
  }),
});
