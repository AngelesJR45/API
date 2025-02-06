module.exports = {
    getAll: async function (req, res) {
      try {
        const productos = await Producto.find(); // Consulta todos los productos
        return res.json(productos);
      } catch (error) {
        return res.serverError({ error: "Error al obtener los productos", details: error.message });
      }
    }
  };
  