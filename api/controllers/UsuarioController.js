module.exports = {
    register: async function (req, res) {
      try {
        const { NombreUsu, Email, Contrasenia } = req.body;
  
        // Validación
        if (!NombreUsu || !Email || !Contrasenia) {
          return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }
  
        // Crear usuario en la base de datos
        let nuevoUsuario = await Usuario.create({ NombreUsu, Email, Contrasenia }).fetch();
  
        // 🔹 Eliminar la Contrasenia antes de enviar la respuesta
        delete nuevoUsuario.Contrasenia;
  
        return res.status(201).json({ message: "Usuario registrado exitosamente", usuario: nuevoUsuario });
      } catch (error) {
        if (error.code === "E_UNIQUE") {
          return res.status(400).json({ error: "El email ya está registrado" });
        }
        return res.serverError({ error: "Error al registrar usuario", details: error.message });
      }
    }
};
