// import express
import express from "express";

// import controladores
import { registrarUsuario } from "../controllers/autenticacion.controller.js";

const router = express.Router();

// registrar usuario
router.post("/registro", registrarUsuario);

// registrar usuario
// router.post("/login", iniciarSesion);

// registrar usuario
// router.post("/inactivacion", inactivacion);

// export
export default router;
