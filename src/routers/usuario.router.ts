import express from "express";
import { acceso, perfil, registro } from "../controllers/autorizacion.control";
import passport from "passport";



const router = express.Router();


router.post('/acceder',acceso);
router.post('/registro', registro);
router.get('/perfil',passport.authenticate("jwt",{session:false}) ,perfil);



export default router;