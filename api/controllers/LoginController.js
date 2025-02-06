const jwt = require("jsonwebtoken");

module.exports = {
  login: async function (req, res) {
    try {
      const { username, password } = req.body;

      // Simulación de autenticación con usuario administrador
      if (username === "admin" && password === "1234") {
        const secretKey = "tu_clave_secreta";
        const token = jwt.sign(
          { id: 1, username: "admin", role: "admin" }, // 🔹 Agregar rol al token
          secretKey,
          { expiresIn: "1h" }
        );

        return res.json({ token });
      }

      return res.status(401).json({ error: "Credenciales incorrectas" });
    } catch (error) {
      return res.serverError({ error: "Error en el servidor", details: error.message });
    }
  }
};
