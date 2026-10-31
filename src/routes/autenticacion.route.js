// import express
import express from "express";

// import controladores
import {
  registrarUsuario,
  obtenerRoles,
  obtenerEstados,
} from "../controllers/autenticacion.controller.js";

// import middleware
import { validacionDatosRegistro } from "../middlewares/autenticacion.middleware.js";
const router = express.Router();

// registrar usuario
router.post("/registro", validacionDatosRegistro, registrarUsuario);

// RUTAS SECUNDARIAS NECESARIAS
// obtener roles
router.get("/roles", obtenerRoles);

// obtener estados de usuarios
router.get("/estados", obtenerEstados);

// registrar usuario
// router.post("/login", iniciarSesion);

// registrar usuario
// router.post("/inactivacion", inactivacion);

// export
export default router;
