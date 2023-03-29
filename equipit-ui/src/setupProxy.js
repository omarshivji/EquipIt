const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://8000-omarshivji-equipit-fjpjc4oo06g.ws-eu93.gitpod.io',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
