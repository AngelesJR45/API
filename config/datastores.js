module.exports.datastores = {
  default: {
    adapter: 'sails-mssql',
    url: 'mssql://sa:123456789@localhost:1433/gestion_pedidos',
    options: {
      encrypt: true, 
      enableArithAbort: true
    }
  }
};