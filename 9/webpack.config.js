const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './src/main.js',
    target: process.env.NODE_ENV === 'production' ? ['web', 'es5'] : 'web', // ['web', 'es5'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        clean: true, // 每次打包前清空旧文件
    },
    devtool: process.env.NODE_ENV === 'production' ? false : "source-map",
    devServer: {
        open: true,
        port: 81, // 启动端口
        progress: true, // 查看编译进度
        contentBase: path.join(__dirname, 'dist'), // 启动服务器内容的位置
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name][hash:6].css'
        }),
        new HtmlWebpackPlugin({
            title: 'html-webpack-plugin',
            template: 'index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            type: 'asset',
            generator: {
                filename: 'images/[name].[hash:6].[ext]'
            }
        }]
    }
}