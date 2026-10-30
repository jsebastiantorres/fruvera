// validacion de campos
export const validacionDatosRegistro = (req, res, next) => {
  // parametros vacios
  const { nombres, apellidos, documento, telefono, cargo, usuario, password } =
    req.body;

  // array para hacer mas legible las verificaciones
  const campos = {
    nombres,
    apellidos,
    documento,
    telefono,
    cargo,
    usuario,
    password,
  };

  // expresiones regulares
  const regexInvalido = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/; // para texto
  const regexSoloNumeros = /^[0-9]+$/; // para numero

  try {
    console.log("entrando al try");

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
      if (campo.length < 1 || campo.length > 30) {
        return res
          .status(400)
          .json({
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
