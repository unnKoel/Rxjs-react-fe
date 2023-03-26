import path, { dirname } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const staticPath = path.join(__dirname, 'public/')

const config = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: staticPath,
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(staticPath, 'index.html'),
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
}

export default config
