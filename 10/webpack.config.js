const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    VueLoaderPlugin
} = require('vue-loader');
const Portfinder = require('portfinder');
const Ip = require('ip');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const Chalk = require('chalk');

module.exports = new Promise((resolve, reject) => {
    Portfinder.getPort({
        port: 80, // minimum port
        stopPort: 8080 // maximum port
    }, (err, port) => {
        const config = {
            mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
            entry: './src/main.js',
            target: "web", // ['web', 'es5'],
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: "bundle.js",
                clean: true, // 每次打包前清空旧文件
            },
            // devtool: "source-map",
            devServer: {
                open: `http://${Ip.address()}:${port}`,
                host: '0.0.0.0',
                port: port, // 启动端口
                progress: true, // 查看编译进度
                quiet: true,
                contentBase: path.join(__dirname, 'dist'), // 启动服务器内容的位置
            },
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, 'src')
                },
                extensions: ['.js', '.vue', '.json'],
                modules: [path.resolve(__dirname, 'src/components'), 'node_modules'],
            },
            plugins: [
                new FriendlyErrorsWebpackPlugin({
                    compilationSuccessInfo: {
                        messages: [`App running at:\n- Local: ${Chalk.green('http://localhost:' + port)}\n- Network: ${Chalk.green('http://' + Ip.address() + ':' + port)}`],
                        notes: [`Note that the development build is not optimized.\n to create a production build, ${Chalk.blue('npm run build')}`]
                    },
                    clearConsole: true,
                }),
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
        };
        resolve(config);
    })
})