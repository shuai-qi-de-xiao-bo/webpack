const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    target: "web", // ['web', 'es5'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        clean: true, // 每次打包前清空旧文件
    },
    devtool: "source-map",
    devServer: {
        open: true,
        port: 81, // 启动端口
        progress: true, // 查看编译进度
        contentBase: path.join(__dirname, 'dist'), // 启动服务器内容的位置
    },
    plugins: [
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
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            type: 'asset',
            generator: {
                filename: 'images/[name].[hash:6].[ext]'
            }
        }]
    }
}