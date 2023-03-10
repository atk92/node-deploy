import z from "zod";
import UserServices from "../services/UserServices";
import { FastifyReply, FastifyRequest } from "fastify";

class UserControllers {
   async findAllUsers(request: FastifyRequest, reply: FastifyReply) {
      const users = await UserServices.findUser();
      return { users }
   }

   async createUser(request: FastifyRequest, reply: FastifyReply) {
      const createUserSchema = z.object({
         nome: z.string(),
         email: z.string().email(),
      });

      const { nome, email } = createUserSchema.parse(request.body);
      await UserServices.createUser({ nome, email });
      return reply.status(201).send();
   }
}

export default new UserControllers();
