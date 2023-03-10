import app from "./app";

const port = process.env.PORT ? Number(process.env.PORT)  : 3333

app.listen({
   host: 'localhost',
   port: port ,
}).then(()=> {
   console.log(`server running in port :${port}`);
});
