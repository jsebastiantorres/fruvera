// import express
import express from "express";

// import controladores
import {
  registrarUsuario,
  obtenerRoles,
  obtenerEstados,
  inciarSesion,
  resetearPassword,
} from "../controllers/autenticacion.controller.js";

// import middleware
import {
  validacionDatosRegistro,
  validacionLogin,
} from "../middlewares/autenticacion.middleware.js";
const router = express.Router();

// registrar usuario
router.post("/registro", validacionDatosRegistro, registrarUsuario);

// iniciar sesion
router.post("/login", validacionLogin, inciarSesion);

// resetar contraseñas
router.post("/reseteo", resetearPassword);

// RUTAS SECUNDARIAS NECESARIAS
// obtener roles
router.get("/roles", obtenerRoles);

// obtener estados de usuarios
router.get("/estados", obtenerEstados);

// export
export default router;
