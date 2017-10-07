module.exports = () => (
  process.env.NODE_ENV !== 'production' ? require('./webpack.dev.js') : require('./webpack.prod.js')
);
