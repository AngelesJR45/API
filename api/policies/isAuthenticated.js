module.exports = async function (req, res, proceed) {
    try {
      // Verifica si existe un token en los headers
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({ error: "Acceso no autorizado. Token requerido." });
      }
  
      // Decodifica el token (suponiendo que usas JWT)
      const jwt = require("jsonwebtoken");
      const secretKey = "tu_clave_secreta"; // ⚠️ Asegúrate de mover esto a un archivo de configuración
      const decoded = jwt.verify(token.replace("Bearer ", ""), secretKey);
  
      // Adjunta el usuario decodificado a la solicitud
      req.user = decoded;
  
      return proceed(); // Permite el acceso si la autenticación es correcta
    } catch (error) {
      return res.status(403).json({ error: "Token inválido o expirado." });
    }
  };
  