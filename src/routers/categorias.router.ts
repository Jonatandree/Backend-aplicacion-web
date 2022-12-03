//aqui va las rutas
import express from "express";
import { getCategorias } from "../controllers/control";

const router = express.Router();

router.get("/", getCategorias);

export default router;