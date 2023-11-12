const express = require('express');
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
        const { Router } = require('express');
        const r = Router();
        r.get("/", (req, res) => {
            return res.json({ ok: true })
        });
    }
}
const app = new App();
const port = process.env.PORT ? Number(process.env.PORT) : 3333
app.app.listen(port, () => {
    console.log(`RUNNING IN PORT: ${port}`)
})