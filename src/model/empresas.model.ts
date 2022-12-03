import mongoose from "mongoose"
import { CoordenadasEmpresa, Producto } from "./categorias.model";


export interface Empresas{
    codigo: mongoose.Types.ObjectId,  
    nombreEmpresa:      string;
    imagenEmpresa:      string;
    descripcion:        string;
    calificacion:       number;
    banner:             string;
    coordenadasEmpresa: Array<CoordenadasEmpresa>;
    productos:          Array<Producto>;
}