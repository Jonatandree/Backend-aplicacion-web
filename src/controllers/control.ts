//aqui va el primer control
import { Request, Response } from "express";
import { CategoriaSchema } from "../model/categorias.schema";



export const getCategorias = (req: Request, res: Response) => {
	CategoriaSchema.find().limit(20)
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};

