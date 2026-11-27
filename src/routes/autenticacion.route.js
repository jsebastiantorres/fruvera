// import express
import express from "express";

// import controladores
import {
  registrarUsuario,
  obtenerRoles,
  obtenerEstados,
  inciarSesion,
  resetearPassword,
  cambiarEstado,
} from "../controllers/autenticacion.controller.js";

// import middleware
import {
  validacionDatosRegistro,
  validacionLogin,
  validacionUsuario,
  validacionReseteo,
  validacionTokenSession,
  validacionRolAdmin,
} from "../middlewares/autenticacion.middleware.js";
const router = express.Router();

// registrar usuario
router.post(
  "/registro",
  validacionTokenSession,
  validacionDatosRegistro,
  registrarUsuario,
);

// iniciar sesion
router.post("/login", validacionLogin, inciarSesion);

// resetar contraseñas
router.post(
  "/reseteo",
  validacionTokenSession,
  validacionReseteo,
  validacionRolAdmin,
  resetearPassword,
);

// resetar inactivación de usuario
router.post(
  "/cambiarEstado",
  validacionTokenSession,
  validacionUsuario,
  cambiarEstado,
);

// RUTAS SECUNDARIAS NECESARIAS
// obtener roles
router.get("/roles", obtenerRoles);

// obtener estados de usuarios
router.get("/estados", obtenerEstados);

// export
export default router;
