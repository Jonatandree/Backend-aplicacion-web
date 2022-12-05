//aqui va las rutas
import express from "express";
import { actualizarCategoria, agregarCategoria, eliminarCategoria, getCategorias, obtenerCategoria } from "../controllers/categoria.control";

const router = express.Router();




//Crud de categoria
router.get("/", getCategorias);
router.get('/:_id', obtenerCategoria);
router.post('/', agregarCategoria);
router.put('/:_id', actualizarCategoria );
router.delete('/:_id',eliminarCategoria);
export default router;