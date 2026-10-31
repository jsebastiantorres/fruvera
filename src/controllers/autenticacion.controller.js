// import de repository
import {
  getAllRoles,
  getAllEstados,
} from "../repositories/atenticacion.repository.js";

// Crear Usuario
export const registrarUsuario = async (req, res) => {
  try {
    console.log("entrando al controlador");

    const { nombres, apellidos, documento, telefono } = req.body;

    const estados = await getAllEstados();
    const estadoActivo = estados.find((e) => e.nombre === "activo");
    // console.log(estadoActivo.id);

    console.log(
      `nombres: ${nombres}, apellidos: ${apellidos}, documento: ${documento}, telefono: ${telefono}, estado: ${estadoActivo.id}`,
    );

    // Registro correto "demo"
    console.log("usuario registrado");
    res.status(200).json({
      nombres: nombres,
      apellidos: apellidos,
      documento: documento,
      telefono: telefono,
      estado: estadoActivo.id,
    });
  } catch (error) {
    res.status(400).json({ message: "error en controlador" });
  }
};

// CONTROLLER SECUNDARIOS NECESARIOS
// Obtener roles
export const obtenerRoles = async (req, res) => {
  console.log("obteniendo roles");
  try {
    const roles = await getAllRoles();
    console.log(roles);

    res.status(200).json({ Message: "Roles", roles: roles });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener estados
export const obtenerEstados = async (req, res) => {
  console.log("obteniendo estados");
  try {
    const estados = await getAllEstados();
    console.log(estados);
    res.status(200).json({ message: "Estados", estados: estados });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// obtener estado x defecto para registro

// configurar hash y codificado de las contraseñas
// configurar el repository para guardar los usuarios [usuario, colaborador]

// POSTGRESQL data para [rol, estado_usuario]
