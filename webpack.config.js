var webpack = require('webpack');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

var name = 'react-typeahead-component';

if (process.env.COMPRESS) {
  name += '.min';
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}


module.exports = {
  entry: ['./src/index'],
  output: {
    path: __dirname + '/dist',
    filename: name + '.js',
    library: 'Typeahead',
    libraryTarget: 'umd'
  },

  externals: [{
    "react": {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    }
  }],

  module: {
    loaders: [{ test: /\.jsx/, loader: 'jsx-loader' }]
  },

  node: {
    Buffer: false
  },

  plugins: plugins
};
