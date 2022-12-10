import mongoose from "mongoose";
import { Motorista, Solicitud } from "./motoristas.model";

 

const schema= new mongoose.Schema<Motorista>({
    nombre: String,
    email: String,
    password:String,
    telefono:Number,
    estadoSolicitud:String,
    ordenesEntregadas: Array<String>,
    ordenes:mongoose.Types.ObjectId,
    estadosOrdenes: String
});





export const MotoristaSchema = mongoose.model('motoristas',schema);