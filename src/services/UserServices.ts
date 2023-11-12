import prismaClient from "../database";

interface DataRecevedForCreatedNewUser {
   nome: string;
   email: string;
   password: string;
}

class UserServices {
   async createUser({ nome, email, password }: DataRecevedForCreatedNewUser) {

      return { nome, email, password };
   }

   async findUser() {
      return { ok: 'true' }
   }
}

export default new UserServices();
