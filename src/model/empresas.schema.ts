import mongoose  from "mongoose";
import { CoordenadasEmpresa, Producto } from "./categorias.model";
import { Empresas } from "./empresas.model";


const schema = new mongoose.Schema<Empresas>({
    codigo: mongoose.Types.ObjectId,  
    nombreEmpresa:      String,
    imagenEmpresa:      String,
    descripcion:        String,
    calificacion:       Number,
    banner:             String,
    coordenadasEmpresa: Array<CoordenadasEmpresa>,
    productos:          Array<Producto>
});

export const EmpresasSchema = mongoose.model('empresas',schema);

