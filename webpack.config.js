const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Ваш основний файл JavaScript
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Ім'я файлу, куди збираються всі JS
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Витягування CSS в окремий файл
          'css-loader', // Завантаження CSS
          'sass-loader', // Завантаження SCSS
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // Мінімізація JS
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Ім'я файлу для згенерованого CSS
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML, який використовується для генерації
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Вказуємо директорію для статики
    open: true, // Автоматичне відкриття браузера
    port: 3000, // Вказуємо порт
    hot: true, // Включення гарячої перезавантаження
    historyApiFallback: true, // Для SPA
  },
  mode: 'development', // Режим розробки
};
