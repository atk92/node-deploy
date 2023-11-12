const express = require('express');
const homeRoutes = require('./routes/HomeRoutes');

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }
    routes() {
        this.app.use("/", homeRoutes)
    }
}

module.exports = new App().app;