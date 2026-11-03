// import de repository
import {
  existUsuario,
  existDocumento,
} from "../repositories/atenticacion.repository.js";

// expresiones regulares de texto y numeros
const regexInvalido = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/; // para texto
const regexSoloNumeros = /^[0-9]+$/; // para numero

// validacion de registro
export const validacionDatosRegistro = async (req, res, next) => {
  // parametros vacios
  const { nombres, apellidos, documento, telefono, usuario, password } =
    req.body;

  // array para hacer mas legible las verificaciones
  const campos = {
    nombres,
    apellidos,
    documento,
    telefono,
    usuario,
  };

  try {
    console.log("entrando al try");

    // validacion que en el form se envie la contraseña
    if (!password) {
      return res.status(400).json({
        error: "Bad Request",
        message: `El campo 'password' es obligatorio.`,
      });
    }

    // verificar si ya existe un colaborador con el documento enviado en el form
    const documentoExiste = await existDocumento(documento);
    if (documentoExiste) {
      return res.status(409).json({
        mensaje: `Ya existe otro colaborador con el documento: ${documento}`,
      });
    }

    // verificar si el usuario ya existe en base de datos
    const usuarioExiste = await existUsuario(usuario);
    if (usuarioExiste) {
      return res.status(409).json({ mensaje: "El usuario ya existe" });
    }

    // validaciones generales
    for (const [nombreCampo, campo] of Object.entries(campos)) {
      // nulos
      if (!campo || campo.trim() === "") {
        return res.status(400).json({
          error: "Bad Request",
          message: `El campo '${nombreCampo}' es obligatorio.`,
        });
      }

      // supera la longitud
      if (campo.length < 2 || campo.length > 30) {
        return res.status(400).json({
          error: "Bad Request",
          message: `La longitud de '${nombreCampo}' es incorrecta`,
        });
      }
    }

    // validaciones texto
    if (regexInvalido.test(nombres)) {
      return res.status(400).json({
        error: "Bad Request",
        message:
          "El nombre no es válido. No se permiten números ni caracteres especiales.",
      });
    }
    if (regexInvalido.test(apellidos)) {
      return res.status(400).json({
        error: "Bad Request",
        message:
          "El apellido no es válido. No se permiten números ni caracteres especiales.",
      });
    }

    // validaciones numero
    if (!regexSoloNumeros.test(documento)) {
      return res.status(400).json({
        error: "Bad Request",
        message:
          "El documento no es válido. No se permiten letras ni caracteres especiales.",
      });
    }
    if (!regexSoloNumeros.test(telefono)) {
      return res.status(400).json({
        error: "Bad Request",
        message:
          "El telefono no es válido. No se permiten letras ni caracteres especiales.",
      });
    }
    return next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// validaciones de login
export const validacionLogin = async (req, res, next) => {
  const { usuario, password } = req.body;

  try {
    if (!usuario || !password) {
      return res.status(400).json({
        error: "Bad Request",
        message: `los campos son abligatorios.`,
      });
    }

    // verificacion longitud
    if (usuario.length < 4 || usuario.length > 15) {
      return res.status(400).json({
        error: "Bad Request",
        message: `Verificar el usuario e intenta nuevamente`,
      });
    }
    return next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// validacion de usuario
export const validacionUsuario = async (req, res, next) => {
  const usuario = req.body;

  try {
    if (!usuario) {
      return res.status(400).json({
        error: "Bad Request",
        message: `los campos son abligatorios.`,
      });
    }

    return next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
