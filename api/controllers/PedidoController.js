module.exports = {
  create: async function (req, res) {
    try {
      const { UsuarioID, ProductoID, Estado } = req.body;

      // 🔹 Validar que UsuarioID está presente
      if (!UsuarioID) {
        return res.status(400).json({ error: "El UsuarioID es obligatorio." });
      }

      // 🔹 Validar que ProductoID está presente
      if (!ProductoID) {
        return res.status(400).json({ error: "El ProductoID es obligatorio." });
      }

      // 🔹 Validar que el usuario existe
      const usuarioExiste = await Usuario.findOne({ UsuarioID });
      if (!usuarioExiste) {
        return res.status(404).json({ error: "El usuario no existe." });
      }

      // 🔹 Validar que el producto existe
      const productoExiste = await Producto.findOne({ ProductoID });
      if (!productoExiste) {
        return res.status(404).json({ error: "El producto no existe." });
      }

      // 🔹 Crear el pedido en la base de datos con Producto
      const nuevoPedido = await Pedido.create({ 
        Usuario: UsuarioID, // 🔹 Se usa `Usuario` en lugar de `UsuarioID`
        Producto: ProductoID, // 🔹 Se usa `Producto` en lugar de `ProductoID`
        Estado: Estado || "Pendiente", // 🔹 Valor por defecto
        FechaPedido: new Date() // 🔹 Fecha actual
      }).fetch();

      // 🔹 Poblar la información del usuario y producto en la respuesta
      return res.status(201).json({ 
        message: "Pedido registrado exitosamente", 
        pedido: {
          PedidoID: nuevoPedido.PedidoID,
          Usuario: {
            UsuarioID: usuarioExiste.UsuarioID,
            Nombre: usuarioExiste.Nombre,
            Email: usuarioExiste.Email
          },
          Producto: {
            ProductoID: productoExiste.ProductoID,
            NombreProducto: productoExiste.NombreP,
            Precio: productoExiste.Precio
          },
          FechaPedido: nuevoPedido.FechaPedido,
          Estado: nuevoPedido.Estado
        }
      });

    } catch (error) {
      return res.serverError({ error: "Error al registrar el pedido", details: error.message });
    }
  }
};
