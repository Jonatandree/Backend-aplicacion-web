import mongoose from "mongoose";
import { Usuario, Orden } from "./usuario.model";
import bcrypt from 'bcrypt';
 

const schema= new mongoose.Schema<Usuario>({
    nombre: String,
    email: String,
    password:String,
    telefono:Number,
    ordenes:mongoose.Types.ObjectId,
    estadosOrdenes: String,
});

schema.methods.encriptarContraUsuario = async(password: string): Promise<string> =>{
    const cript = await bcrypt.genSalt(10);
    return bcrypt.hash(password,cript);
};

schema.methods.validarContraUsuario = async function(password: string):Promise<boolean>{
return await bcrypt.compare(password,this.password);
}


export const UsuarioSchema = mongoose.model('usuarios',schema);
