//schema de categorias
import mongoose  from "mongoose";
import { Categoria, Empresa } from "./categorias.model";


const schema = new mongoose.Schema<Categoria>({
    nombreCategorias: String,
    imagenCategoria:  String,
    
 

});

export const CategoriaSchema = mongoose.model('categorias',schema);


