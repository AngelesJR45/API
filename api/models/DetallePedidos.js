module.exports = {
  tableName: 'DetallesPedido', // Nombre exacto en SQL Server
  primaryKey: 'DetalleID',

  attributes: {
    DetalleID: { type: 'number', autoIncrement: true },

    // 🔹 Relación con Pedido
    Pedido: {
      model: 'Pedido',
      columnName: 'PedidoID'
    },
    Producto: {
      model: 'Producto', // Hace referencia al modelo Producto.js
      columnName: 'ProductoID',
      
    }
  }
};
