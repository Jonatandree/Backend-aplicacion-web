import mongoose from "mongoose";

import { Orden } from "./usuario.model";

 

const schema= new mongoose.Schema<Orden>({
    
    nombreProducto:String,
    email:String,
    precio:Number,
    password:String,
    estadoSolicitud:String,
    ordenesEntregadas: Array<String>,
    idUsuario:mongoose.Types.ObjectId,
    estadosOrdenes: String,
    impuesto:Number,
    comisionMotorista:String,
    comisionAlero:String,
    ordenesPendientes: Array<String>
});





export const MotoristaSchema = mongoose.model('ordenes',schema);