const jwt = require("jsonwebtoken");

const secretKeyAccess = "clave_secreta_access";  // Clave para Access Token
const secretKeyRefresh = "clave_secreta_refresh"; // Clave para Refresh Token

module.exports = {
  async login(req, res) {
    try {
      const { email, contrasenia } = req.body;

      if (!email || !contrasenia) {
        return res.badRequest({ mensaje: 'Email y contraseña son requeridos.' });
      }

      // Buscar usuario por email
      const usuario = await Usuario.findOne({ Email: email });

      if (!usuario) {
        return res.json({ mensaje: 'Usuario no encontrado.', autenticado: false });
      }

      // Validar la contraseña
      if (usuario.Contrasenia !== contrasenia) {
        return res.json({ mensaje: 'Contraseña incorrecta.', autenticado: false });
      }

      // Generar Access Token (Expira en 15 min)
      const accessToken = jwt.sign(
        { id: usuario.UsuarioID, email: usuario.Email, role: usuario.Rol },
        secretKeyAccess,
        { expiresIn: "15m" }
      );

      // Generar Refresh Token (Expira en 7 días)
      const refreshToken = jwt.sign(
        { id: usuario.UsuarioID },
        secretKeyRefresh,
        { expiresIn: "7d" }
      );

      // Guardar el Refresh Token en la base de datos
      await Usuario.updateOne({ UsuarioID: usuario.UsuarioID }).set({ RefreshToken: refreshToken });

      return res.json({
        mensaje: 'Autenticación exitosa',
        autenticado: true,
        accessToken,
        refreshToken
      });
    } catch (error) {
      return res.serverError({ mensaje: 'Error en la autenticación.', error });
    }
  },

  async refreshToken(req, res) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res.status(400).json({ mensaje: 'Se requiere un Refresh Token' });
      }

      // Buscar usuario con el Refresh Token
      const usuario = await Usuario.findOne({ RefreshToken: refreshToken });

      if (!usuario) {
        return res.status(403).json({ mensaje: 'Refresh Token inválido' });
      }

      // Verificar el Refresh Token
      jwt.verify(refreshToken, secretKeyRefresh, (err, decoded) => {
        if (err) {
          return res.status(403).json({ mensaje: 'Refresh Token expirado o inválido' });
        }

        // Generar un nuevo Access Token
        const newAccessToken = jwt.sign(
          { id: usuario.UsuarioID, email: usuario.Email, role: usuario.Rol },
          secretKeyAccess,
          { expiresIn: "15m" }
        );

        return res.json({ accessToken: newAccessToken });
      });

    } catch (error) {
      return res.serverError({ mensaje: 'Error al refrescar el token.', error });
    }
  }
};
