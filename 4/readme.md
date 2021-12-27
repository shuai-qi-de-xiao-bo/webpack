#### 安装
安装webpack: `npm install webpack webpack-cli -D`
安装babel: `npm install babel-loader @babel/core @babel/preset-env -D`

#### webpack.config.js配置
    module.exports = {
        ...
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }]
        },
        ...
    }



