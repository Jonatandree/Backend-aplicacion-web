import Document from "mongoose";

export interface Usuario extends Document{
    usuario:string;
    email:string;
    telefono?:number;
    password:string;
}