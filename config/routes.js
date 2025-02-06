

module.exports.routes = {



  '/': { view: 'pages/homepage' },
  'GET /api/products': 'ProductoController.getAll',
  'POST /api/login': 'LoginController.login',
  'POST /api/register': 'UsuarioController.register',
  'POST /api/orders': 'PedidoController.create',
  'GET /api/orders/:id': 'DetallePedidosController.getPedidoById',
  'POST /usuario/verificar': 'UsuariosController.verificarUsuario',
  'POST /auth/login': 'AuthController.login',
  'POST /auth/refresh': 'AuthController.refreshToken'




  


};
