import { Request,Response } from "express";
import { UsuarioSchema } from "../model/usuario.schema";

export const acceso = (req: Request, res:Response) =>{
  
};

export const registro = (req:Request, res:Response) =>{
    const p = new UsuarioSchema({
        usuario: req.body.usuario,
        email: req.body.email,
        password:req.body.password,
        telefono:req.body.telefono
	});
	p.save().then(saveResponse => {
		res.send({message:'Nuevo agreagada',saveResponse});
		res.end();
	}).catch(error=>{
		res.send({message:'Hubo un error al guardar',error});
		res.end();
	});
};


export const perfil = (req:Request,res:Response) =>{

};