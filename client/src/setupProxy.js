const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
  target: 'http://server:5000/'
};

module.exports = function (app) {
  app.use('/api', createProxyMiddleware(proxy));
};
