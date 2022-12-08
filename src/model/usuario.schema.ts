import mongoose from "mongoose";
import { Usuario } from "./usuario.model";

 

const schema= new mongoose.Schema<Usuario>({
    usuario: String,
    email: String,
    password:String,
    telefono:Number

});



export const UsuarioSchema = mongoose.model('usuarios',schema);
