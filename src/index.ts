import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Database } from "./utils/database";
import categoriasRouter from "./routers/categorias.router";



dotenv.config();
//Se conecta a mongo
const database:Database = new Database();
const app: Express = express();
const port = process.env.PORT;
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

app.use('/categorias',categoriasRouter);

app.listen(port, () => {
	console.log(`Servidor iniciado man https://localhost:${port}`);
});