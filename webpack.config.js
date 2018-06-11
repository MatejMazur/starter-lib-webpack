import path from 'path';
import nodeExternals from 'webpack-node-externals';

const env = process.env.NODE_ENV;

export default {
  mode: env,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: env === 'production' ? '[name].[hash].js' : '[name].js',
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
