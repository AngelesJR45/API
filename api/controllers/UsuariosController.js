module.exports = {
    async verificarUsuario(req, res) {
      try {
        const { email, contrasenia } = req.body; // Obtener email y contraseña desde el cuerpo de la petición
  
        if (!email || !contrasenia) {
          return res.badRequest({ mensaje: 'El email y la contraseña son requeridos.' });
        }
  
        // 🔹 Buscar si el usuario existe en la base de datos con el email
        const usuario = await Usuario.findOne({ Email: email });
  
        if (!usuario) {
          return res.json({ existe: false, mensaje: 'Usuario no encontrado.' });
        }
  
        // 🔹 Validar la contraseña (Comparación directa)
        if (usuario.Contrasenia !== contrasenia) {
          return res.json({ existe: false, mensaje: 'Contraseña incorrecta.' });
        }
  
        return res.json({ existe: true, usuario });
      } catch (error) {
        return res.serverError({ mensaje: 'Error al verificar el usuario.', error });
      }
    }
  };
  