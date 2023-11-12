
const app = require('./src/App.js')
const port = process.env.PORT ? Number(process.env.PORT) : 3333
app.app.listen(port, () => {
    console.log(`RUNNING IN PORT: ${port}`)
})