import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
//Se conecta a mongo
const app: Express = express();
const port = process.env.PORT;
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

app.get('/', (req:Request ,res:Response) =>{
res.send('Express + Typescript server man');


});

app.listen(port, () => {
	console.log(`Servidor iniciado man https://localhost:${port}`);
});