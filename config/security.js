module.exports.security = {
  cors: {
    allRoutes: true,  // Permite CORS en todas las rutas
    allowOrigins: '*',  // Permite solicitudes desde cualquier origen (cambiar si es necesario)
    allowCredentials: false,
    allowRequestHeaders: 'Content-Type, Authorization',
    allowRequestMethods: 'GET, POST, PUT, DELETE, OPTIONS'
  }
};
