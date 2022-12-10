import mongoose from "mongoose";
import Document from "mongoose";

import {Orden} from  "./usuario.model";

export type Solicitud = 'Pendiente'|'Aceptado'|'Denegado';
export interface Motorista extends Document{
    nombre:string;
    email:string;
    telefono?:number;
    password:string;
    estadoSolicitud:Solicitud;
    ordenesEntregadas: Array<Entregadas>;
    ordenes?:mongoose.Types.ObjectId;
    estadosOrdenes?: Orden;
    
}

export interface Entregadas{
    _id?:mongoose.Types.ObjectId;
    nombreProducto:string;
    img:string;
}