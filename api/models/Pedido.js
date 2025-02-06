module.exports = {
  tableName: 'Pedido', // Asegura que coincide con la tabla en SQL Server
  primaryKey: 'PedidoID',

  attributes: {
    PedidoID: { type: 'number', autoIncrement: true },

    // 🔹 Relación con Usuario
    Usuario: {
      model: 'Usuario', // Hace referencia al modelo Usuario.js
      columnName: 'UsuarioID',
      required: true
    },

    // 🔹 Relación con Producto
    Producto: {
      model: 'Producto', // Hace referencia al modelo Producto.js
      columnName: 'ProductoID',
      required: true
    },

    FechaPedido: { type: 'ref', columnType: 'DATETIME', defaultsTo: new Date() },

    Estado: { 
      type: 'string', 
      isIn: ['Pendiente', 'Enviado', 'Entregado'], 
      defaultsTo: 'Pendiente'
    }
  }
};
