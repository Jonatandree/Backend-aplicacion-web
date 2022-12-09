import Document from "mongoose";

export interface Usuario extends Document{
    usuario:string;
    email:string;
    telefono?:number;
    password:string;
    encriptarContraUsuario(password:string):Promise<string>;
    validarContraUsuario(password:string): Promise<boolean>;
}