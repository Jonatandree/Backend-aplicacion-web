import express from "express";
import { agregarEmpresaCategoria, obtenerEmpresas } from "../controllers/empresas.controllers";

const router = express.Router();

router.get("/", obtenerEmpresas);
router.put("/:id/categoria", agregarEmpresaCategoria);

export default router;