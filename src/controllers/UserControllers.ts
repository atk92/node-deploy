import z from "zod";
import UserServices from "../services/UserServices";
import { FastifyReply, FastifyRequest } from "fastify";

class UserControllers {
   
   async createUser(request: FastifyRequest, reply: FastifyReply) {
      const createUserSchema = z.object({
         name: z.string(),
         email: z.string().email(),
      });
      
      const { name, email, password } = createUserSchema.parse(request.body);
      await UserServices.createUser({ name, email, password });
      return reply.status(201).send({created: {msg: `Welcome ${name}`}});
   }

   async findAllUsers(request: FastifyRequest, reply: FastifyReply) {
      const users = [{}]
      const date = new Date();
      
      return { users, getTime: 'String Literal meu nobre' }
   }
}

export default new UserControllers();
