import prismaClient from "../database";

interface DataRecevedForCreatedNewUser {
   nome: string;
   email: string;
}

class UserServices {
   async createUser({ nome, email }: DataRecevedForCreatedNewUser) {
      await prismaClient.user.create({
         data: {
            nome: nome,
            email: email,
         },
      });
      return true;
   }

   async findUser() {
      return await prismaClient.user.findMany();
   }
}

export default new UserServices();
