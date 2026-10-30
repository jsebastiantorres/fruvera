// Crear Usuario
export const registrarUsuario = async (req, res) => {
  try {
    const { nombres, apellidos, documento, telefono } = req.body;

    console.log(
      `nombres: ${nombres}, apellidos: ${apellidos}, documento: ${documento}, telefono: ${telefono}`,
    );

    // Registro correto "demo"
    console.log("respuesta exitosa");
    res.status(200).json({
      nombres: nombres,
      apellidos: apellidos,
      documento: documento,
      telefono: telefono,
    });
  } catch (error) {
    res.status(400).json({ message: message.error });
  }
};
