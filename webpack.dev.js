const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
  },
});
