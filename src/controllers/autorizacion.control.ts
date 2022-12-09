import { Request,Response } from "express";
import { UsuarioSchema } from "../model/usuario.schema";
import jwt from 'jsonwebtoken';
import { Usuario } from "../model/usuario.model";

export const acceso = async (req: Request, res:Response) =>{
 	const usuario = await UsuarioSchema.findOne({email:req.body.email});
	if(!usuario) return res.status(400).json("Correo o contraseña incorrecto");
	const correcto: boolean = await usuario.validarContraUsuario(req.body.password);
	if(!correcto) return res.status(400).json("Contraseña incorrecta");


	const token:string = jwt.sign({_id:usuario._id}, process.env.TOKEN  ||"aleros",{
	expiresIn: 60 * 60 * 24
})
res.json({token: token});

};

export const registro = async (req:Request, res:Response) =>{
    const p = new UsuarioSchema({
        usuario: req.body.usuario,
        email: req.body.email,
        password:req.body.password,
        telefono:req.body.telefono
	});
	p.password= await p.encriptarContraUsuario(p.password)
	const result= await p.save();
	
	const token: string = jwt.sign({_id:p._id}, process.env.TOKEN||"aleros")
		res.header('auntentico',token).json(result);
		res.end();
	
	

};


export const perfil = (req:Request,res:Response) =>{
res.send('perfil');
};

