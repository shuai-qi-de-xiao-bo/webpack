#### webpack-dev-server
webpack-dev-server 为你提供了一个基本的 web server，并且具有 live reloading(实时重新加载) 功能
参考地址: https://webpack.docschina.org/configuration/dev-server/

#### 安装
npm install webpack-dev-server -D


#### webpack.config.js配置
const path = require('path');

module.exports = {
    ...
    devServer: {
        port: 80, // 启动端口
        progress: true, // 查看编译进度
        contentBase: path.join(__dirname, 'dist'), // 启动服务器内容的位置,
        open: true, // 启动后自动打开浏览器显示
    },
    ...
}

更多配置参考地址: https://webpack.docschina.org/configuration/dev-server/

#### 启动
webpack serve

#### 特别注意
webpack5在更改文件后浏览器不会自己刷新，需要手动刷新，解决此问题需要设置target = 'web'
module.exports = {
    ...
    target: "web",
    ...
}

#### 添加自定义命令
package.json里面配置:
                    {
                        ...
                        "scripts": {
                            "serve": "webpack serve"
                        },
                        ...
                    }
运行命令 npm run serve