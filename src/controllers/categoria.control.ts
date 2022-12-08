//aqui va el primer control
import { Request,  Response } from "express";
import { CategoriaSchema } from "../model/categorias.schema";
import mongoose from "mongoose";


//CRUD de categorias
export const getCategorias = (req: Request, res: Response) => {
	CategoriaSchema.find({}).limit(20)
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


//CRUD de empresas

export const obtenerEmpresas = (req: Request, res: Response) => {
	CategoriaSchema.find({_id:req.params._id},{empresas:true ,_id:false}).limit(20)
		.then((result) => {
			res.send(result[0]);
			res.end();
		})
		.catch((error) => console.error(error));
};

export const obtenerEmpresa =(req:Request, res:Response)=> {

	CategoriaSchema.findOne({	
		_id:req.params._id,
		'empresas.nombreEmpresa': req.params.nombreEmpresa
	},
	{"empresas.$":true, _id:false})
	.then((result) => {
		res.send(result);
		res.end();
	})
	.catch((error) => console.error(error));



};

export const agregarEmpresa = (req:Request,res:Response) => {
CategoriaSchema.updateOne({_id: req.params._id},
	{
		$push:{
			empresas:{
				_id: new mongoose.Types.ObjectId(req.body._id),  
				nombreEmpresa: req.body.nombreEmpresa,
				imagenEmpresa: req.body.imagenEmpresa,
				descripcion:req.body.descripcion,			   
				calificacion: req.body.calificacion,
				banner:  req.body.banner,
				coordenadasEmpresa: req.body.coordenadasEmpresa,
				productos: req.body.productos

			}
		}
	}
	).then(result =>{
		res.send({message:'Empresa agregada', result});
		res.end();
	}).catch(error => {
		res.send({message:'error empresa', error});
		res.end();
	})

};

export const actualizarEmpresa = (req:Request,res:Response) =>{
	CategoriaSchema.findOneAndUpdate({
		id:req.params._id,
		'empresas.nombreEmpresa': req.params.nombreEmpresa
	}, {
		"empresas.$._id":	 			req.body._id,	
		"empresas.$.nombreEmpresa": 	req.body.nombreEmpresa,      
		"empresas.$.imagenEmpresa":  	req.body.imagenEmpresa,
		"empresas.$.calificacion":   	req.body.calificacion,    
		"empresas.$.banner":       		req.body.banner,  
		"empresas.$.coordenadasEmpresa":req.body.coordenadasEmpresa,
		"empresas.$.productos":      	req.body.productos   
	}
).then(actualizar => {
		res.send({message:'Empresa actualizada', actualizar});
		res.end();
	})
};


export const eliminarEmpresa =(req:Request,res:Response)=>{
	CategoriaSchema.findOneAndDelete({
		_id:req.params._id,
		'empresas.nombreEmpresa': req.params.nombreEmpresa
	} ,{
/*$pull:{
		"empresas.$._id":	 			req.body._id,	
		"empresas.$.nombreEmpresa": 	req.body.nombreEmpresa,      
		"empresas.$.imagenEmpresa":  	req.body.imagenEmpresa,
		"empresas.$.calificacion":   	req.body.calificacion,    
		"empresas.$.banner":       		req.body.banner,  
		"empresas.$.coordenadasEmpresa":req.body.coordenadasEmpresa,
		"empresas.$.productos":      	req.body.productos
		} 
	*/})
	.then(removerCategoria => {
		res.send({message:'Registro eliminado', removerCategoria});
		res.end();
	}).catch(error=>{
		res.send({message:'Hubo un error al guardar',error});
		res.end();
	})	
};
