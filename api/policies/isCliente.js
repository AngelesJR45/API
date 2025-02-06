const jwt = require("jsonwebtoken");

const secretKeyAccess = "clave_secreta_access"; // Clave segura para Access Token

module.exports = async function (req, res, proceed) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: "Acceso no autorizado. Se requiere token." });
    }

    const decoded = jwt.verify(token.replace("Bearer ", ""), secretKeyAccess);

    if (decoded.role !== "cliente") {
      return res.status(403).json({ error: "Acceso denegado. Solo clientes pueden acceder." });
    }

    req.user = decoded;
    return proceed();
  } catch (error) {
    return res.status(403).json({ error: "Token inválido o expirado." });
  }
};
