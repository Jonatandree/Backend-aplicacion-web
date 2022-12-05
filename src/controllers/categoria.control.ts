//aqui va el primer control
import { Request, response, Response } from "express";

import { CategoriaSchema } from "../model/categorias.schema";


//Obtener categorias
export const getCategorias = (req: Request, res: Response) => {
	CategoriaSchema.find({},{empresas:false}).limit(20)
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};

export const obtenerCategoria = (req: Request, res:Response) => {
	CategoriaSchema.findOne({_id:req.params._id},{})
	.then((result) => {
		res.send(result);
		res.end();
	})
	.catch((error) => console.error(error));
}

export const agregarCategoria = (req:Request, res:Response) => {
	const p = new CategoriaSchema({
		nombreCategorias: req.body.nombreCategorias,
		imagenCategoria:  req.body.imagenCategoria,
		empresas:		req.body.empresas
	});
	p.save().then(saveResponse => {
		res.send(saveResponse);
		res.end();
	}).catch(error=>{
		res.send({message:'Hubo un error al guardar',error});
		res.end();
	});
};

export const actualizarCategoria =(req:Request, res:Response)=>{
	CategoriaSchema.updateOne({id:req.params._id}, {
		nombreCategorias: req.body.nombreCategorias,
		imagenCategoria:  req.body.imagenCategoria,
		empresas:		req.body.empresas
	}).then(actualizar=> {
		res.send({message:'Categoria actualizada', actualizar});
		res.end();
	})
}

export const eliminarCategoria =(req:Request,res:Response)=>{
	CategoriaSchema.remove({_id:req.params._id})
	.then(removerCategoria => {
		res.send({message:'Registro eliminado', removerCategoria});
		res.end();
	}).catch(error=>{
		res.send({message:'Hubo un error al guardar',error});
		res.end();
	})	


}