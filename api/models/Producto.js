module.exports = {
  tableName: 'Producto', // Asegura que coincide con el nombre exacto de la tabla en SQL Server
  primaryKey: 'ProductoID',
  attributes: {
    
    ProductoID: { type: 'number', autoIncrement: true },
    NombreP: { type: 'string', required: true }, // Usa 'string' en lugar de 'varchar'
    Precio: { type: 'number', required: true },
    Stock: { type: 'number', required: true },
    createdAt: { type: 'number', autoCreatedAt: false },
    updatedAt: { type: 'number', autoUpdatedAt: false },
  }
};
