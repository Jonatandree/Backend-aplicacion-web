import mongoose from "mongoose";
import Document from "mongoose";

import {Orden} from  "./usuario.model";

export type Solicitud = 'Pendiente'|'Aceptado'|'Denegado';
export type ComisionM= 65;
export type ComisionA= 30;


export interface Motorista extends Document{
    nombreProducto:string;
    email:string;
    precio:number;
    password:string;
    estadoSolicitud:Solicitud;
    ordenesEntregadas: Array<Entregadas>;
    idUsuario:mongoose.Types.ObjectId;
    estadosOrdenes?: Orden;
    impuesto:number;
    comisionMotorista:ComisionM;
    comisionAlero:ComisionA
    ordenesPendientes: Array<Pendientes>;
    
    

}

export interface Entregadas{
    _id?:mongoose.Types.ObjectId;
    nombreProducto:string;
    img:string;
}

export interface Pendientes{
    nombreProducto:string;
    img:string;
    precio:number;
    coodenadas: number;
}
