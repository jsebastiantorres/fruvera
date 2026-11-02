// import bcryptjs
import bcrypt from "bcryptjs";

// import de repository
import {
  getAllRoles,
  getAllEstados,
  getRolUsuario,
  createColaborador,
  createUsuario,
} from "../repositories/atenticacion.repository.js";

// Crear Usuario
export const registrarUsuario = async (req, res) => {
  try {
    console.log("entrando al controlador");

    const { nombres, apellidos, documento, telefono, usuario, password } =
      req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    // crear el nuevo colaborador en tabla colaborador y retornar el id
    // crear el colaborador
    const nuevoColaborador = {
      nombres: nombres,
      apellidos: apellidos,
      documento: documento,
      telefono: telefono,
    };

    // obtener colaborador_id
    const colaboradorCreado = await createColaborador(nuevoColaborador);

    // estado activo por default
    const estados = await getAllEstados();
    const estadoActivo = estados.find((e) => e.nombre === "activo");
    // console.log(estadoActivo.id);

    // rol usuario por default
    const rol = await getRolUsuario();
    console.log(rol);

    // log
    console.log(
      `${colaboradorCreado.id}, estado: ${estadoActivo.id}, rol: ${[rol.id, rol.nombre]}`,
    );

    // crear el nuevo usuario con usuario contraseña y id colaborador
    const nuevoUsuario = {
      usuario: usuario,
      hashPassword: hashPassword,
      estadoUsuarioId: estadoActivo.id,
      rolId: rol.id,
      colaboradorId: colaboradorCreado.id,
    };

    const usuarioCreado = await createUsuario(nuevoUsuario);

    console.log(`usuarioCreado ${usuarioCreado}`);

    // Registro correto "demo"
    console.log("usuario registrado");
    res.status(200).json({
      usuarioCreado,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
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
