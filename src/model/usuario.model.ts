import mongoose from "mongoose";
import Document from "mongoose";

export type Orden  = |'Pendiente'|'EnCamino'|'EnDestino' |'Entregado'|'EnOrigen';

export interface Usuario extends Document{
    nombre:string;
    email:string;
    telefono?:number;
    password:string;
    ordenes?:mongoose.Types.ObjectId;
    estadosOrdenes?: Orden;
    encriptarContraUsuario(password:string):Promise<string>;
    validarContraUsuario(password:string): Promise<boolean>;
}