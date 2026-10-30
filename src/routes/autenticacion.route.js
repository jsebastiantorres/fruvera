// import express
import express from "express";

// import controladores
import { registrarUsuario } from "../controllers/autenticacion.controller.js";

// import middleware
import {validacionDatosRegistro} from "../middlewares/autenticacion.middleware.js"
const router = express.Router();

// registrar usuario
router.post("/registro", validacionDatosRegistro, registrarUsuario);

// registrar usuario
// router.post("/login", iniciarSesion);

// registrar usuario
// router.post("/inactivacion", inactivacion);

// export
export default router;
