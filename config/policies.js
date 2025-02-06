const PedidoController = require("../api/controllers/PedidoController");
const UsuarioController = require("../api/controllers/UsuarioController");
const DetallePedidos = require("../api/models/DetallePedidos");


module.exports.policies = {

  ProductoController: {
    '/api/products': 'isAuthenticated', // 🔒 Protege todas las rutas con autenticación
    'getAll': 'isCliente', // 🔒 Permite acceso libre a administradores

  },
  PedidoController: {

    '/api/register': 'isAuthenticated', // 🔒 Protege todas las rutas con autenticación
    'create': 'isCliente', // 🔒 Solo administradores pueden crear productos
    

  },
  DetallePedidos: {
    '/api/orders/:id': 'isAuthenticated', // 🔒 Protege todas las rutas con autenticación
    'getPedidoById': 'isCliente', // 🔒 Solo administradores pueden crear productos
  }
  

 

};
