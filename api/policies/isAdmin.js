const jwt = require("jsonwebtoken");

module.exports = async function (req, res, proceed) {
  try {
    // Verificar si hay un token en los headers
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: "Acceso no autorizado. Se requiere token." });
    }

    // Decodificar el token
    const secretKey = "tu_clave_secreta"; // Usa una clave segura
    const decoded = jwt.verify(token.replace("Bearer ", ""), secretKey);

    // Verificar si el usuario tiene rol de admin
    if (decoded.role !== "admin") {
      return res.status(403).json({ error: "Acceso denegado. Solo administradores pueden acceder." });
    }

    // Adjuntar el usuario a la solicitud y permitir el acceso
    req.user = decoded;
    return proceed();
  } catch (error) {
    return res.status(403).json({ error: "Token inválido o expirado." });
  }
};
