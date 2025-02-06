module.exports = {
  tableName: 'Usuario',
  primaryKey: 'UsuarioID',

  attributes: {
    UsuarioID: { type: 'number', autoIncrement: true },
    NombreUsu: { type: 'string', required: true },
    Email: { type: 'string', required: true },
    Contrasenia: { type: 'string', required: true },
    Rol: {
      type: 'string',
      isIn: ['admin', 'cliente'], // Solo permite estos dos roles
      defaultsTo: 'cliente' // Por defecto, los usuarios serán clientes
    },
    RefreshToken: { type: 'string' } // Guardará el refresh token del usuario
  
  }
};
