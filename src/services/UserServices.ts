import prismaClient from "../database";

interface DataRecevedForCreatedNewUser {
   nome: string;
   email: string;
   password: string;
}

class UserServices {
   async createUser({ nome, email, password }: DataRecevedForCreatedNewUser) {
      await prismaClient.user.create({
         data: {
            nome: nome,
            email: email,
            password: password
         },
      });
      return true;
   }

   async findUser() {
      return await prismaClient.user.findMany();
   }
}

export default new UserServices();
