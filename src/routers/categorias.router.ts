//aqui va las rutas
import express from "express";
import { agregarCategoria, getCategorias, obtenerCategoria } from "../controllers/categoria.control";

const router = express.Router();




//Crud de categoria
router.get("/", getCategorias);
router.get('/:_id', obtenerCategoria);
router.post('/', agregarCategoria);

export default router;