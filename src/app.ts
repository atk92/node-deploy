import fastify, { FastifyInstance } from "fastify";
import UserControllers from "./controllers/UserControllers";

class App {
   app: FastifyInstance;
   constructor() {
      this.app = fastify();
      this.routes();
   }
   routes() {
      this.app.get('/', UserControllers.findAllUsers);
      this.app.post('/', UserControllers.createUser);
   }
}

export default new App().app;
