//primera interfaz
import mongoose from "mongoose";
var codigo= new mongoose.Types.ObjectId();
export interface Categoria {
    nombreCategorias: string;
    imagenCategoria:  string;
    empresas?:         Array<Empresa>;
}

export interface Empresa {
    _id: mongoose.Types.ObjectId,  
    nombreEmpresa:      string;
    imagenEmpresa:      string;
    descripcion:        string;
    calificacion:       number;
    banner:             string;
    coordenadasEmpresa: Array<CoordenadasEmpresa>;
    productos?:          Array<Producto>;
}

export interface CoordenadasEmpresa {
    latitud:  number;
    longitud: number;
}

export interface Producto {
    _id: mongoose.Types.ObjectId,
    nombreProducto:      string;
    imagenProducto:      string;
    descripcionProducto: string;
    Precio:              number;
}