import express from "express";
import { acceso, perfil, registro } from "../controllers/autorizacion.control";


const router = express.Router();


router.post('/acceder',acceso);
router.post('registro', registro);
router.get('/perfil', perfil);



export default router;