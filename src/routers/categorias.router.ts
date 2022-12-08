//aqui va las rutas
import express from "express";
import { actualizarCategoria, actualizarEmpresa, agregarCategoria, agregarEmpresa, eliminarCategoria, eliminarEmpresa, getCategorias, obtenerCategoria, obtenerEmpresa, obtenerEmpresas } from "../controllers/categoria.control";

const router = express.Router();




//rutas de categoria
router.get("/", getCategorias);
router.get('/:_id', obtenerCategoria);
router.post('/', agregarCategoria);
router.put('/:_id', actualizarCategoria );
router.delete('/:_id',eliminarCategoria);



//rutas de empresas
router.get("/:_id/empresas", obtenerEmpresas);
router.get("/:_id/empresas/:nombreEmpresa", obtenerEmpresa);
router.post("/:_id/empresas", agregarEmpresa)
router.put("/:_id/empresas/:nombreEmpresa", actualizarEmpresa);
router.delete('/:_id/empresas/:nombreEmpresa',eliminarEmpresa);

export default router;