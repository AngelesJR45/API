module.exports = {
  getPedidoById: async function (req, res) {
    try {
      const { id } = req.params;

      // 🔹 Validar que `id` sea un número válido
      if (!id || isNaN(id)) {
        return res.status(400).json({ error: "El ID del pedido es inválido o no fue proporcionado." });
      }

      // 🔹 Buscar el pedido con el usuario asociado
      const pedido = await Pedido.findOne({ PedidoID: id }).populate("Usuario");

      if (!pedido) {
        return res.status(404).json({ error: "El pedido no existe." });
      }

      // 🔹 Buscar un detalle de pedido asociado
     
      const productoExiste = await Producto.findOne({ ProductoID: id });
      console.log("detalles pedido "+ productoExiste.ProductoID);

      return res.status(200).json({
        DetallePedidoID: pedido.PedidoID,
        PedidoID: pedido.PedidoID,
        userinfo: [{
          NameUser: pedido.Usuario.NombreUsu,
          email: pedido.Usuario.Email,
          UsuarioID: pedido.Usuario.UsuarioID

        }],
        Infoproduct:[{
          ProductID: productoExiste.ProductoID,
          NameProduct: productoExiste.NombreP,
          price: productoExiste.Precio

        }],
        FechaPedido: pedido.FechaPedido,
        Estado: pedido.Estado
       
      });

    } catch (error) {
      return res.serverError({ error: "Error al obtener el pedido", details: error.message });
    }
  }
};
