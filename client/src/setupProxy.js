const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://shopping-list-backend-api.azurewebsites.net',
      changeOrigin: true,
    })
  );
};