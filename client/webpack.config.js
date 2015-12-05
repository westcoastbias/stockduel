module.exports = {

  entry: './app/index.jsx',
  output: {
    path: './dist',
    publicPath: 'dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
      },
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  }

};
