//schema de categorias
import mongoose  from "mongoose";
import { Categoria, Empresa } from "./categorias.model";


const schema = new mongoose.Schema<Categoria>({
    nombreCategorias: String,
    imagenCategoria:  String,
    empresas:Array<Empresa>
 

});

export const CategoriaSchema = mongoose.model('categorias',schema);


