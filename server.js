const express = require('express');
const homeRoutes = require('./src/routes/HomeRoutes')
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
const app = new App();
const port = process.env.PORT ? Number(process.env.PORT) : 3333
app.app.listen(port, () => {
    console.log(`RUNNING IN PORT: ${port}`)
})