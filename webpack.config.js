import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: [
    nodeExternals({ modulesFromFile: { exclude: ['peerDependencies'] } })
  ]
};
