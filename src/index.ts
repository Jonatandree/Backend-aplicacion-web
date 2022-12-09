import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Database } from "./utils/database";
import categoriasRouter from "./routers/categorias.router";
import usuarioRouter from "./routers/usuario.router";
import passport from "passport";
import passportMiddelware from "./middlewares/passport";
import cors from "cors";
import morgan from 'morgan';


dotenv.config();
//Se conecta a mongo
const database:Database = new Database();
const app: Express = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.use(passport.initialize());
passport.use(passportMiddelware);


app.use('/categorias',categoriasRouter);
app.use('/usuarios', usuarioRouter);

app.listen(port, () => {
	console.log(`Servidor iniciado man https://localhost:${port}`);
});