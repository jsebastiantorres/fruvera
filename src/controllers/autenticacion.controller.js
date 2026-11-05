// import bcryptjs
import bcrypt from "bcryptjs";

// import de repository
import {
  getAllRoles,
  getAllEstados,
  getRolUsuario,
  createColaborador,
  createUsuario,
  getUsuarioLogin,
  resetPassword,
  changeEstado,
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

    res.status(200).json({ message: "Roles", roles: roles });
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

// INICIAR SESION
export const inciarSesion = async (req, res) => {
  console.log("iniciar sesion");
  const { usuario, password } = req.body;
  try {
    // obtener usuario de db
    const obtenerUsuarioLogin = await getUsuarioLogin(usuario);
    console.log("comparacion:");

    if (!obtenerUsuarioLogin || obtenerUsuarioLogin.estadoUsuarioId != 1) {
      return res
        .status(401)
        .json({ message: "no se encuentra el usuario o esta inactivo" });
    }

    // verificar password
    const validacionDePassword = await bcrypt.compare(
      password,
      obtenerUsuarioLogin.hashPassword,
    );

    console.log(`validacionDePassword ${validacionDePassword}`);

    // validaciones password
    if (!obtenerUsuarioLogin || !validacionDePassword) {
      return res.status(401).json({ error: "Caredenciales inválidas" });
    }

    res.status(200).json({ message: "bienvenido" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// configurar hash y codificado de las contraseñas

// RESETEAR CONTRASEÑA (solo administradores)
export const resetearPassword = async (req, res) => {
  const { usuario, password } = req.body;

  try {
    const obtenerUsuario = await getUsuarioLogin(usuario);
    console.log(obtenerUsuario);

    if (!obtenerUsuario || obtenerUsuario.estadoUsuarioId != 1) {
      return res
        .status(401)
        .json({ message: "no se encuentra el usuario o esta inactivo" });
    }

    const passwordHashed = await bcrypt.hash(password, 10);
    const reseteoPassword = await resetPassword(usuario, passwordHashed);

    res.status(200).json({ message: "contraseña reseteada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CAMBIAR ESTADO (solo administradores)
export const cambiarEstado = async (req, res) => {
  const { usuario } = req.body;

  try {
    console.log(usuario);
    // buscar y actualizar el estado del usuario
    const obtenerUsuario = await getUsuarioLogin(usuario);
    console.log(obtenerUsuario);

    if (!obtenerUsuario) {
      return res.status(401).json({ message: "no se encuentra el usuario" });
    }

    if (obtenerUsuario.rolId === 1) {
      return res.status(401).json({ message: "no autorizado" });
    }

    // de activo a inactivo
    if (obtenerUsuario.estadoUsuarioId == 1) {
      let nuevoEstado = 2;
      const actualizarEstado = await changeEstado(
        obtenerUsuario.usuario,
        nuevoEstado,
      );
      return res.status(200).json({ message: "se ha 'inactivado' el usuario" });
    }

    // de inactivo a activo
    if (obtenerUsuario.estadoUsuarioId == 2) {
      let nuevoEstado = 1;
      const actualizarEstado = await changeEstado(
        obtenerUsuario.usuario,
        nuevoEstado,
      );
      return res.status(200).json({ message: "se ha 'activado' el usuario" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
