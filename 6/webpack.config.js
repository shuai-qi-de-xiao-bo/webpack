const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    target: ['web', 'es5'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name][hash:6].css'
        })
    ],
    module: {
        rules: [{
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